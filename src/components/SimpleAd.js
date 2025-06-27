/**
 * SimpleAd - Implementación directa del código de AdSense
 * Usa exactamente el código proporcionado por Google AdSense
 * Para testing y implementación rápida
 */

export class SimpleAd {
  /**
   * Crear un anuncio simple usando el código exacto de AdSense
   * @param {string} containerId - ID del contenedor donde insertar el anuncio
   */
  static createAd(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with ID ${containerId} not found`);
      return;
    }

    // Crear el HTML exacto proporcionado por AdSense
    container.innerHTML = `
      <!-- wheelspinner -->
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-7898475614767076"
           data-ad-slot="1940254660"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    `;

    // Ejecutar el script de AdSense
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      console.log(`Ad loaded in container: ${containerId}`);
    } catch (error) {
      console.error('Error loading ad:', error);
    }
  }

  /**
   * Crear múltiples anuncios en diferentes posiciones
   */
  static initializeAds() {
    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.createAdContainers();
      });
    } else {
      this.createAdContainers();
    }
  }

  /**
   * Crear contenedores de anuncios en posiciones estratégicas
   */
  static createAdContainers() {
    // Crear contenedor para anuncio de header
    this.createAdContainer('header-ad', 'header');
    
    // Crear contenedor para anuncio de contenido (después de wheel-section)
    this.createAdContainer('content-ad', 'after-wheel-section');
    
    // Crear contenedor para anuncio de footer
    this.createAdContainer('footer-ad', '#app');
  }

  /**
   * Crear un contenedor de anuncio en una posición específica
   * @param {string} adId - ID para el contenedor del anuncio
   * @param {string} targetSelector - Selector del elemento donde insertar
   */
  static createAdContainer(adId, targetSelector) {
    const target = document.querySelector(targetSelector);
    if (!target) {
      console.log(`Target ${targetSelector} not found for ad ${adId}`);
      return;
    }

    // Crear el contenedor del anuncio
    const adContainer = document.createElement('div');
    adContainer.id = adId;
    adContainer.className = 'ad-container simple-ad';
    
    // Agregar estilos básicos
    adContainer.style.cssText = `
      text-align: center;
      margin: 20px 0;
      padding: 10px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      backdrop-filter: blur(20px);
    `;

    // Insertar según la posición
    if (targetSelector === 'header') {
      const header = document.querySelector('header');
      if (header && header.parentNode) {
        header.parentNode.insertBefore(adContainer, header.nextSibling);
      }
    } else if (targetSelector === 'after-wheel-section') {
      const wheelSection = document.querySelector('#wheel-section');
      if (wheelSection && wheelSection.parentNode) {
        // Insert AFTER wheel-section
        wheelSection.parentNode.insertBefore(adContainer, wheelSection.nextSibling);
      }
    } else if (targetSelector === '#app') {
      const app = document.querySelector('#app');
      if (app) {
        app.appendChild(adContainer);
      }
    }

    // Cargar el anuncio en el contenedor
    setTimeout(() => {
      this.createAd(adId);
    }, 100);
  }

  /**
   * Crear un anuncio de prueba para development
   * Muestra un placeholder cuando AdSense no está disponible
   */
  static createTestAd(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div style="
        background: rgba(255, 255, 255, 0.1);
        border: 2px dashed rgba(255, 255, 255, 0.3);
        color: rgba(255, 255, 255, 0.7);
        text-align: center;
        padding: 40px 20px;
        border-radius: 8px;
        font-family: Arial, sans-serif;
      ">
        <h4 style="margin: 0 0 10px 0;">📢 Espacio Publicitario</h4>
        <p style="margin: 0; font-size: 14px;">
          Anuncio de AdSense (ID: 1940254660)<br>
          <small>Los anuncios aparecerán aquí en producción</small>
        </p>
      </div>
    `;
  }
}

// Auto-inicializar en desarrollo
if (typeof window !== 'undefined') {
  // Verificar si estamos en modo desarrollo
  const isDevelopment = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1';
  
  if (isDevelopment) {
    console.log('🎯 SimpleAd: Modo desarrollo detectado');
    console.log('💡 Para cargar anuncios reales, usa: SimpleAd.initializeAds()');
    console.log('🧪 Para anuncios de prueba, usa: SimpleAd.createTestAd("container-id")');
  }
}

export default SimpleAd;