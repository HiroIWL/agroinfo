import os

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from google import genai
from google.genai import types

load_dotenv()

api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise RuntimeError("Defina GEMINI_API_KEY no arquivo backend/.env")

client = genai.Client(api_key=api_key)

MODELO = "gemini-3.5-flash-lite"

INSTRUCAO = (
    "Você é o assistente do site AgroInfo. Responda em português, de forma "
    "simples e curta, apenas sobre agricultura: culturas, solo, adubação e "
    "pragas. Se a pergunta fugir desse tema, diga educadamente que só "
    "responde sobre agricultura."
)

app = FastAPI()


class Pergunta(BaseModel):
    texto: str


@app.get("/api/saude")
def saude():
    return {"status": "ok"}


@app.post("/api/perguntar")
def perguntar(p: Pergunta):
    texto = p.texto.strip()
    if not texto or len(texto) > 500:
        raise HTTPException(status_code=400, detail="Pergunta inválida.")

    try:
        resposta = client.models.generate_content(
            model=MODELO,
            contents=texto,
            config=types.GenerateContentConfig(system_instruction=INSTRUCAO),
        )
        return {"resposta": resposta.text or "Não consegui gerar uma resposta."}
    except Exception as erro:
        print("Erro Gemini:", erro)
        raise HTTPException(
            status_code=502, detail="Não foi possível consultar a IA agora."
        )