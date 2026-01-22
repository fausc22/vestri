// API simplificada para Vestri - solo para el formulario de contacto
// Obtener la URL del API desde variables de entorno
const API_URL = process.env.NEXT_PUBLIC_API_URL || 
  (typeof window === "undefined" 
    ? "http://localhost:4000"  // Servidor: localhost por defecto
    : "http://localhost:4000"); // Cliente: localhost por defecto

export const api = {
  baseUrl: API_URL,
  
  async post<T>(endpoint: string, body?: any): Promise<T> {
    const url = `${API_URL}${endpoint}`;
    
    try {
      // Timeout de 10 segundos para POST
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      
      const data = await response.json();
      
      if (!response.ok) {
        let errorMessage = data.message || data.error || `API Error (${response.status}): ${response.statusText}`;
        if (data.details && Array.isArray(data.details)) {
          errorMessage += `: ${data.details.join(', ')}`;
        } else if (data.details) {
          errorMessage += `: ${data.details}`;
        }
        throw new Error(errorMessage);
      }
      
      return data;
    } catch (error: any) {
      if (error.name === 'AbortError' || error.code === 'ECONNREFUSED' || error.message?.includes('fetch failed')) {
        const errorMsg = `No se pudo conectar al backend en ${url}. Verifica que el backend esté corriendo y que NEXT_PUBLIC_API_URL esté configurado correctamente.`;
        console.error(`[API] ${errorMsg}`);
        console.error(`[API] Error original:`, error);
        throw new Error(errorMsg);
      }
      throw error;
    }
  },
};
