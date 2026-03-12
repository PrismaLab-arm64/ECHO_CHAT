# 🔐 Echo Chat PWA - Minimalist & Secure

![Version](https://img.shields.io/badge/version-3.0.0--Modern-0084ff?style=for-the-badge)
![Status](https://img.shields.io/badge/status-operational-0084ff?style=for-the-badge)
![Privacy](https://img.shields.io/badge/privacy-maximum-0084ff?style=for-the-badge)
![Architecture](https://img.shields.io/badge/P2P-1:1-0084ff?style=for-the-badge)

## 🔗 Enlaces Rápidos

**🌐 USAR APP EN VIVO**: https://prismalab-arm64.github.io/ECHO_OFF/  
**💻 Repositorio GitHub**: https://github.com/PrismaLab-arm64/ECHO_OFF

---

**Sala de Chat P2P 1:1 Segura. Rediseñada totalmente hacia la estética moderna, limpia e intuitiva.**

> Echo Chat v3.0.0 - Seguridad Absoluta en una Interfaz Premium
> Comunicación P2P nativa | Sistema "Sin rastro" garantizado | Interfaz Meta/WhatsApp Style | Funcionalidades E2E invisibles

## 🎯 Características Principales

### 💬 Funcionalidades Base
- **🔒 Privacidad Zero-Trace**: Cero almacenamiento centralizado. Arquitectura pura Peer-to-Peer a través de WebRTC.
- **🌐 1 a 1 Simultáneo**: Diseñado estructuralmente para soportar exclusivamente un emisor y un receptor. 
- **💾 Destrucción Inmediata (Eficiencia)**: Rediseño completo para destruir huellas de datos **inmediatamente** después de que hay una respuesta, reduciendo así drásticamente fugas de memoria y manteniendo un rendimiento ultra fluido en dispositivos móviles.

### 🎨 Nueva Interfaz Premium (v3.0+)
- **✨ Diseño Minimalista Moderno**: Inspirado fuertemente en estéticas robustas y vigentes (estilo WhatsApp/Meta UI). 
- **💧 Efectos Visuales Nativos**: Animaciones controladas por hardware, limpieza total de interfaces "Matrix-Console", resultando en un entorno de comunicación natural y no invasivo.
- **📱 PWA 100% Nativa**: Sensación y comportamientos de app móvil. Interacciones gestuales y táctiles de máxima fluidez. Iconos rediseñados y estandarizados (192px / 512px).
- **🌗 Paleta de Alta Legibilidad**: Utilizando esquemas lumínicos pulcros `(#f0f2f5 y #ffffff)` y acentos azules `(#0084ff)` en conjunción con tipografías sans-serif de grado premium (*Inter - Google Fonts*).

### 🚀 Funcionalidades Avanzadas de Interacción
- **📁 File Transfer P2P Simplificado**: Transferencia directa RAM-a-RAM (archivos hasta 20 MB). Los eventos de carga y descarga están totalmente limpios visualmente en el área del chat.
- **🎙️ Voice Notes**: Captura y reproducción nativa fluida usando MediaRecorder incrustado en globos estéticos.

### 🔐 Seguridad Transparente
- **🚨 Botón de Pánico Integrado**: Conservado y oculto bajo el capó. La combinación `ESC x3` en menos de 2 segundos purga instantáneamente todo el entorno DOM/Datos locales de la conversación, rediriendo el navegador.
- **⚠️ Bloqueo de Conexiones Terceras**: Enlace único E2E. Cualquier nueva solicitud es detectada y avisada para rechazo rotundo.

## 💻 Rendimiento y Clean Code (Refactorización v3)
- **Extrema Reducción de Líneas de Código**: 
  - Se suprimieron más de `1500 líneas` antiguas y verbosas de UI/UX retro en `app.js`.
  - Archivos intermedios (`theme.clean.css`, `theme.overrides.css`) reemplazados por una única hoja de estilos hiper-optimizada en un formato de variables modernas (`style.css`).
  - La manipulación del DOM y las llamadas al marco de `PeerJS` son directas. El impacto y peso de la app se ha minimizado al máximo, maximizando la vida y fluidez en cualquier hardware.

## 🚀 Inicio Rápido (Despliegue Local)

```bash
# Python (Recomendado para testeo)
python -m http.server 8000

# Node.js
npx http-server -p 8000
```
Abre `http://localhost:8000` en tu navegador.

## 📖 Cómo Usar

### 1️⃣ Crear Conversación
- Abre la app y haz click en **Nueva Conversación**.
- El sistema te entregará un *Código de Sala* (Ej: `ECHO_123ABC...`).
- Haz click en el icono de copiar y comparte este enlace con tu receptor por un canal seguro.
- Queda a la espera de la conexión entrante (Notificación Host).

### 2️⃣ Unirse a Conversación
- Haz click en **Unirse con Enlace** desde la pantalla principal.
- Pega el ID que tu Host (creador de la sala) te envió.
- Click en **Conectar**.  (El Host debe aprobarte del otro lado).

---

## 👨‍💻 Autor y Proyecto

**PrismaLab**
- GitHub: [@PrismaLab-arm64](https://github.com/PrismaLab-arm64)

### ⚖️ Exoneración de Responsabilidad (Disclaimer)
**Echo Chat** es un simulador conceptual educativo basado completamente del lado del cliente (**Client-Side**). La plataforma no aloja un servidor central, delegando la responsabilidad de protección a la integridad del enrutamiento final que provee el cliente STUN local. El uso indebido o malicioso de esta arquitectura, así como intercepciones a nivel de red externa, quedan completamente fuera del alcance y del propósito de este software de prueba.
