# 🧺 センタクびより – Weather × Life App

## 🌤 概要
「今日は洗たくできるかな？」  
そんな日常の小さな悩みをテクノロジーで解決するWebアプリです。  
OpenWeather APIの天気データをもとに、気温・湿度・風速・降水確率から「乾きスコア」を自動計算。  
最も洗たく物が乾きやすい時間帯を提案します。

---

## 🧭 開発の背景
雨の日に洗たくして後悔した経験から、  
「天気と家事をもう少しスマートに結びつけられないか？」と思ったのがきっかけです。  
天気 × 家事 × テクノロジーをテーマに、  
生活の中に小さな“便利”を生み出すことを目指しています。  

本アプリは、**技術学習と実用性の両立**を目的に個人開発で進行中です。

---

## ⚙️ 使用技術
| カテゴリ | 技術 |
|-----------|------|
| Frontend | HTML / CSS / JavaScript |
| API | OpenWeather API |
| Database（予定） | Firebase Firestore |
| Framework（予定） | React（Vite） |
| Deployment（予定） | GitHub Pages / Vercel |
| Notification（予定） | Firebase Cloud Messaging |
| その他 | LocalStorage（MVP保存機能） |

---

## 🚧 開発進捗
- [x] 天気データ取得（OpenWeather API）
- [ ] 乾きスコア算出（気温・湿度・風速・降水確率）
- [ ] Firebase連携（履歴保存）
- [ ] React化（SPA対応）
- [ ] 通知機能（ベスト時間をお知らせ）
- [ ] PWA化（ホーム画面追加）

---

## 🌈 今後の展望
- 「掃除」「布団干し」など家事全般にスコア拡張  
- AIコメント機能（例：「午後は湿度高め、部屋干し推奨☁️」）  
- 家族やフラットメイトと共有できる“家事ハブ”化  

---

## 💡 学習テーマ
本プロジェクトを通じて、以下のスキル習得を目指しています：
- APIデータを扱う力（Fetch / JSON処理）
- クラウドDB設計（Firebase Firestore）
- 認証・通知などのバックエンド連携
- ReactによるモダンなUI設計
- PWAによるモバイルUX最適化

---

## 💧 乾きスコア（Dry Score）について

### 🗾 Japanese

本アプリでは、気象庁および民間気象サービス（ウェザーニュース、Yahoo!天気など）が提供する **「洗濯指数」** の考え方を参考に、  
**気温・湿度・風速** の3要素をもとに洗濯物の乾きやすさを数値化しています。  

これらの要素は、洗濯物の乾燥を左右する主要因（蒸発速度・対流・空気中の水分量）であり、  
既存の「生活指数（Laundry Index）」と同じ理論的基盤を持ちます。  

乾きスコアは以下の経験式（empirical model）により算出しています：

> 🧮 **Dry Score = 2 × 気温 + 3 × 風速 − 0.8 × 湿度**

このモデルは、気象庁の「生活指数」および WeatherNews 社「洗濯指数」で使用されている要素を参考に、  
独自に簡易化・数値化した近似式です。  
スコアは **0〜100** の範囲に正規化され、値が高いほど乾きやすい気象条件を示します。  

| スコア | 評価 | コメント例 |
|--------|------|-------------|
| 80〜100 | ☀️ 絶好の洗たく日和 | カラッと乾きます |
| 60〜79  | 😊 よく乾きそう | 午前中に干すのがおすすめ |
| 40〜59  | 🌤 普通 | 日当たりを意識すると◎ |
| 20〜39  | ☁️ 部屋干し推奨 | 湿気多め |
| 0〜19   | ☔ 洗たくNG | 乾きにくい・雨注意 |

---

### 🌎 English

This app introduces a simplified **“Dry Score”**,  
a weather-based indicator inspired by the **Laundry Index** used by the Japan Meteorological Agency (JMA)  
and private services such as **WeatherNews** and **Yahoo! Weather**.  

The score reflects three meteorological parameters — **temperature, humidity, and wind speed** —  
which directly influence the evaporation rate and drying efficiency of laundry.  

It is calculated by the following *empirical approximation*:

> 🧮 **Dry Score = 2 × Temperature + 3 × Wind Speed − 0.8 × Humidity**

This model is not an arbitrary formula but an **approximation of the physics-based principles**  
(evaporation, convection, and vapor pressure) behind existing “Laundry Index” methods.  
The score is normalized to a 0–100 scale, where a higher value indicates better drying conditions.

| Score | Evaluation | Description |
|--------|-------------|--------------|
| 80–100 | ☀️ Perfect | Ideal sunny weather for drying |
| 60–79  | 😊 Good | Likely to dry well |
| 40–59  | 🌤 Moderate | Consider sunlight exposure |
| 20–39  | ☁️ Poor | Indoor drying recommended |
| 0–19   | ☔ Very Poor | Rainy or humid day |

---

📘 *Reference:*  
Based on the conceptual frameworks of the Japan Meteorological Agency’s “Laundry Index”  
and WeatherNews’ “Weather-based Lifestyle Indices”, simplified and reconstructed for open data use.






## 🪄 作者
**谷口 輝（Hikaru Taniguchi / MEI-OKU）**  
個人でWeb開発と地域課題×ITのプロジェクトを進行中。  
「生活を少しだけ便利に、少しだけ明るくする」技術をテーマに学習・発信しています。  
- 🌐 [Wantedly](https://www.wantedly.com/id/mei_oku)  
- 🐙 [GitHub](https://github.com/MEI-OKU)

---

## 🗓 開発ログ
| 日付 | 内容 |
|------|------|
| 2025-11-07 | 構想・README作成 |
---

© 2025 Hikaru Taniguchi
