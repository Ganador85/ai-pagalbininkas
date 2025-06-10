# AI Pagalbininkas (API)

Tai yra paprastas Node.js serveris, kuris jungiasi prie OpenAI API ir grąžina atsakymus pagal vartotojo klausimus.

## Paleidimas
1. Įrašyk savo OpenAI API raktą į `.env` failą.
2. Įdiek priklausomybes:
   ```
   npm install
   ```
3. Paleisk serverį:
   ```
   npm start
   ```

## API
POST /api/chat  
Kūnas:
```json
{ "message": "Tavo klausimas" }
```

Grąžina:
```json
{ "reply": "Atsakymas iš AI" }
```
