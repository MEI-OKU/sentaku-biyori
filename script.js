const API_KEY = "0e7d85fae93411b2a3b0d5642fdbeb5c";
const city = "Sapporo";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&lang=ja&appid=${API_KEY}`;

async function getForecast() {
  const res = await fetch(url);
  const data = await res.json();

  // ★ 3時間ごと × 8件 = 約24時間分
  const forecasts = data.list.slice(0, 8);

  let bestTime = null;
  let bestScore = -1;

  // 結果HTMLのベース
  let html = `<h2>📅 今日のセンタク予報</h2><div class="forecast-grid">`;

  forecasts.forEach((f) => {
    const dateTime = new Date(f.dt * 1000).toLocaleString("ja-JP", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
    });

    const temp = f.main.temp;
    const humidity = f.main.humidity;
    const wind = f.wind.speed;
    const weather = f.weather[0].description;
    const icon = f.weather[0].icon;
    const rainProb = f.pop * 100;

    const score = calcDryScore(temp, humidity, wind, rainProb);

    if (score > bestScore) {
      bestScore = score;
      bestTime = dateTime;
    }

    html += `
      <div class="forecast-item">
        <h3>${dateTime}</h3>
        <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${weather}" class="weather-icon">
        <p>${weather}</p>
        <p><strong>${score}</strong> 点</p>
      </div>
    `;
  });

  html += `</div>`;
  document.getElementById("result").innerHTML = html;

  // summary更新
  document.getElementById("summary-date").textContent =
    `📅 日付：${new Date().toLocaleDateString("ja-JP")}`;
  document.getElementById("summary-best").textContent =
    `☀️ ベスト時間帯：${bestTime}（スコア ${bestScore}）`;
}

function calcDryScore(temp, humidity, wind, rainProb) {
  const score = temp * 2 + wind * 3 - humidity * 0.8 - rainProb * 0.5 + 60;
  return Math.max(0, Math.min(100, Math.round(score)));
}

getForecast();
