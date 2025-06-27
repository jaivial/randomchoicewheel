[PROMPT TEMPLATE PARA CLAUDE - REGLA ÚNICA DE 250 LÍNEAS]

Aspectos a mejorar:
1) Hay que cambiar los tags meta de seo y de compartir en redes sociales para que el nombre de la app sea Random Choice Wheel y randomchoicewheel.com
2) No quiero que exista límite de longitud en el texto de las opciones, quiero que se pueda escribir hasta un libro si hace falta como opcion


%%% FLUJO DE TRABAJO AUTOMÁTICO %%%
1. ANÁLISIS INICIAL
- Analizar requerimientos del usuario
- Identificar todos los archivos afectados (existentes/nuevos)
- Calcular líneas actuales de cada archivo
- Detectar componentes candidatos a subdivisión

2. PLANIFICACIÓN ESTRATÉGICA
[PLAN_AUTOMÁTICO]
- [ ] **Paso Principal:** [Acción principal]
   - Archivos clave: `archivo1.ext`, `archivo2.ext`
   - Líneas actuales: X, Y
   - Estrategia de subdivisión: [Condicional si >250]

3. EJECUCIÓN Y VERIFICACIÓN
- Implementar cambios según plan
- INMEDIATAMENTE DESPUÉS verificar líneas por archivo
- Si algún archivo >250 líneas:
   * [ ] Subdividir en archivos con sufijo _part[n].ext
   * [ ] Distribuir lógica manteniendo coherencia
   * [ ] Preservar TODOS los comentarios existentes
   * [ ] Actualizar referencias en el proyecto

4. BUCLE DE RE-VERIFICACIÓN
- REPETIR el proceso de verificación
- Si persisten archivos >250 líneas:
   * [ ] Realizar nueva subdivisión recursiva
   * [ ] Priorizar componentes/helpers como unidades
   * [ ] Asegurar encapsulación funcional

%%% RESTRICCIÓN ÚNICA %%%
❗ LÍMITE ESTRÍCTO: NINGÚN archivo puede superar 250 líneas de código (incluyendo comentarios y documentación)

%%% FORMATO DE RESPUESTA %%%
[SOLUCIÓN IMPLEMENTADA]
- Archivos procesados: 
   * `archivo_original.ext` → `archivo_part1.ext` (245 líneas)
   * `nuevo_helper_part2.ext` (198 líneas)
- Ciclos de subdivisión: [Nº de iteraciones requeridas]
- Estado final: [✔️ Todos <250 líneas | ❌ Persisten archivos grandes]
- Advertencias: [Si se requiere intervención manual]

%%% EJEMPLO ITERATIVO %%%
[PRIMERA EJECUCIÓN]
- Modificado `data_processor.js` (310 → 295 líneas)
- ⚠️ Excede 250 líneas → Subdividir

[SEGUNDA EJECUCIÓN]
- Creados:
   * `data_processor_part1.js` (230 líneas)
   * `data_processor_part2.js` (165 líneas)
- Verificación: ✔️ Todos <250 líneas