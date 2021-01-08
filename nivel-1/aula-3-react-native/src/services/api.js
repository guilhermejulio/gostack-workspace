import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.100.16:2398',
});

export default api;

/**
 * iOS com emulador: localhost
 * iOS com dispositivo: IP da maquina
 * Android com Emulador: localhost (adb reverse)
 * Android com Emulador: Utilizamos o IP -> 10.0.2.2 (Android Studio)
 * Android com outro Emulador: 10.0.3.2 (Genymotion)
 * Android com dispositivo fisico: IP da máquina.
 * 
 */