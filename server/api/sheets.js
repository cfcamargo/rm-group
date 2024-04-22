// server/api/sheets.js
import { google } from 'googleapis';

export default defineEventHandler(async (event) => {
    const payload = await readBody(event);

    const clientEmail = import.meta.env.VITE_GOOGLE_CLIENT_EMAIL;
    const privateKey = import.meta.env.VITE_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: clientEmail,
            private_key: privateKey,
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = import.meta.env.VITE_GOOGLE_SHEETS_SPREADSHEET_ID;
    const range = 'DB!A2:C2'; // Intervalo onde deseja inserir os dados
    const values = [
        [payload.name, payload.email, payload.phone], // Dados a serem inseridos
    ];

    try {
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId,
            range,
            valueInputOption: 'RAW',
            resource: {
                values,
            },
        });

        console.log('%d linhas inseridas.', response.data.updates.updatedRows);
        return response.data; // Retorna os dados da resposta se for bem-sucedido
    } catch (error) {
        console.error('Erro ao inserir dados na planilha:', error);
        throw new Error('Erro ao inserir dados na planilha'); // Lança um erro para ser capturado pelo chamador da função
    }
});
