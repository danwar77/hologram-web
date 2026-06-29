import {
  Activity,
  BarChart3,
  Bell,
  Boxes,
  Braces,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Cpu,
  Gauge,
  Globe2,
  Images,
  Layers3,
  LineChart,
  Menu,
  Mic,
  MousePointer2,
  Network,
  Radar,
  Search,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";
import type { CSSProperties, KeyboardEvent, PointerEvent } from "react";
import { useState } from "react";

const navItems = ["Overview", "Analitica", "Sistemas", "Proyectos"];

const railItems = [
  { icon: Images, id: "galeria", label: "Galeria" },
  { icon: LineChart, id: "metricas", label: "Metricas" },
  { icon: Network, id: "red", label: "Red" },
  { icon: Boxes, id: "recursos", label: "Recursos" },
  { icon: Settings2, id: "ajustes", label: "Ajustes" },
];

const galleryItems = [
  {
    alt: "Render 3D de una escena de accion con explosion sobre un edificio",
    description: "Composicion cinematica con fuego, azotea y profundidad nocturna.",
    kicker: "Render 01",
    src: "/gallery/die-hard-rooftop.png",
    title: "Rooftop ignition",
  },
  {
    alt: "Render 3D de retrato de personaje inspirado en cientifico futurista",
    description: "Retrato de personaje 3D con modelado facial y look de laboratorio.",
    kicker: "Render 02",
    src: "/gallery/doc-brown-portrait.png",
    title: "Temporal portrait",
  },
];

const metricTiles = [
  ["15,323", "Daily signups", "+20.1%"],
  ["73.2M", "May sales", "+11.4%"],
  ["84%", "Retention", "+4.8%"],
  ["92ms", "Latency", "-16.2%"],
];

const activityRows = [
  ["North Cluster", "Operational", "99.8%"],
  ["Creative Stack", "Rendering", "74.3%"],
  ["Realtime Voice", "Standby", "41.5%"],
  ["Web Surface", "Online", "100%"],
];

const widgetDetails = {
  daily: ["Daily Signups", "15,323 eventos activos"],
  sales: ["Monthly Sales", "73.2M volumen proyectado"],
  conversion: ["Growth Rate", "65% margen bruto"],
  retention: ["Conversion", "37% conversion operativa"],
  bars: ["Profit Summary", "14 segmentos analizados"],
  map: ["Global Activity", "5 nodos sincronizados"],
  radar: ["System Vector", "98.4 puntos de senal"],
};

type WidgetId = keyof typeof widgetDetails;

function TrendChart({ compact = false }: { compact?: boolean }) {
  return (
    <svg className={compact ? "trend-chart compact" : "trend-chart"} viewBox="0 0 420 190" role="img" aria-label="Grafica de tendencia">
      <path className="chart-grid" d="M24 32H398M24 72H398M24 112H398M24 152H398M72 18V168M132 18V168M192 18V168M252 18V168M312 18V168M372 18V168" />
      <path className="trend-muted" d="M26 52L62 96L94 70L128 136L164 42L198 82L232 48L266 76L304 34L338 52L394 26" />
      <path className="trend-main" d="M26 146L58 130L92 142L126 106L162 118L198 74L232 88L268 48L304 56L342 24L394 40" />
      <path className="trend-fill" d="M26 146L58 130L92 142L126 106L162 118L198 74L232 88L268 48L304 56L342 24L394 40V170H26Z" />
      <circle cx="342" cy="24" r="6" />
      <circle cx="394" cy="40" r="7" />
    </svg>
  );
}

function AreaChart() {
  return (
    <svg className="area-chart" viewBox="0 0 390 160" role="img" aria-label="Grafica mensual">
      <path className="chart-grid" d="M18 36H372M18 76H372M18 116H372M66 20V138M126 20V138M186 20V138M246 20V138M306 20V138" />
      <path className="area-fill" d="M18 124L48 104L78 112L110 76L142 88L178 48L214 66L248 38L286 54L322 22L372 44V144H18Z" />
      <path className="trend-main" d="M18 124L48 104L78 112L110 76L142 88L178 48L214 66L248 38L286 54L322 22L372 44" />
    </svg>
  );
}

function MiniBars() {
  const bars = [30, 52, 42, 68, 84, 58, 72, 49, 92, 74, 63, 86, 78, 96];
  return (
    <div className="mini-bars" aria-label="Resumen de barras">
      {bars.map((height, index) => (
        <i key={index} style={{ "--bar-height": `${height}%` } as CSSProperties} />
      ))}
    </div>
  );
}

function RingGauge({ value, label, className = "" }: { value: string; label: string; className?: string }) {
  return (
    <div className={`ring-gauge ${className}`} style={{ "--gauge-value": value } as CSSProperties}>
      <strong>{label}</strong>
    </div>
  );
}

function WorldMap() {
  return (
    <svg className="world-map" viewBox="0 0 360 160" role="img" aria-label="Mapa de actividad">
      <path d="M22 84L58 60L98 72L126 42L174 64L220 38L254 58L306 48L340 76" />
      <path d="M34 116L78 104L118 122L156 90L204 112L244 82L292 98L336 88" />
      <circle cx="58" cy="60" r="7" />
      <circle cx="174" cy="64" r="9" />
      <circle cx="254" cy="58" r="7" />
      <circle cx="306" cy="48" r="8" />
      <circle cx="244" cy="82" r="6" />
    </svg>
  );
}

function RadarGraph() {
  return (
    <svg className="radar-graph" viewBox="0 0 170 150" role="img" aria-label="Radar de sistema">
      <path className="radar-grid" d="M85 8L153 45L142 119L85 143L28 119L17 45ZM85 34L124 56L118 101L85 116L52 101L46 56ZM85 8V143M17 45H153M28 119L124 56M142 119L46 56" />
      <path className="radar-fill" d="M85 22L132 52L110 96L88 128L45 99L55 55Z" />
    </svg>
  );
}

function GalleryProjection() {
  const [activeImage, setActiveImage] = useState(0);
  const item = galleryItems[activeImage];
  const nextIndex = (activeImage + 1) % galleryItems.length;
  const previousIndex = (activeImage - 1 + galleryItems.length) % galleryItems.length;

  function showImage(index: number) {
    setActiveImage(index);
  }

  function showPrevious() {
    showImage(previousIndex);
  }

  function showNext() {
    showImage(nextIndex);
  }

  return (
    <section className="gallery-projection" aria-label="Galeria holografica">
      <div className="gallery-beam" />

      <div className="gallery-stage" key={item.src}>
        <div className="gallery-ghost gallery-ghost-left">
          <img src={galleryItems[previousIndex].src} alt="" aria-hidden="true" />
        </div>
        <figure className="gallery-frame">
          <img src={item.src} alt={item.alt} width="1920" height="1080" />
          <span className="gallery-scan" aria-hidden="true" />
          <figcaption className="gallery-caption">
            <span>{item.kicker}</span>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </figcaption>
        </figure>
        <div className="gallery-ghost gallery-ghost-right">
          <img src={galleryItems[nextIndex].src} alt="" aria-hidden="true" />
        </div>
      </div>

      <div className="gallery-controls" aria-label="Controles de galeria">
        <button className="gallery-arrow" type="button" aria-label="Imagen anterior" onClick={showPrevious}>
          <ChevronLeft size={22} />
        </button>

        <div className="gallery-thumbs">
          {galleryItems.map((galleryItem, index) => (
            <button
              aria-label={`Mostrar ${galleryItem.title}`}
              aria-pressed={activeImage === index}
              className={activeImage === index ? "gallery-thumb active" : "gallery-thumb"}
              key={galleryItem.src}
              onClick={() => showImage(index)}
              type="button"
            >
              <img src={galleryItem.src} alt="" aria-hidden="true" />
              <span>{galleryItem.kicker}</span>
            </button>
          ))}
        </div>

        <button className="gallery-arrow" type="button" aria-label="Imagen siguiente" onClick={showNext}>
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}

export default function App() {
  const [activeNav, setActiveNav] = useState(navItems[0]);
  const [activeRail, setActiveRail] = useState(() => (window.location.hash === "#galeria" ? "galeria" : "metricas"));
  const [activeWidget, setActiveWidget] = useState<WidgetId>("daily");
  const [paneStyle, setPaneStyle] = useState<CSSProperties>({
    "--tilt-x": "0deg",
    "--tilt-y": "0deg",
    "--glow-x": "50%",
    "--glow-y": "42%",
  } as CSSProperties);

  function handlePanePointerMove(event: PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const tiltY = (x - 0.5) * 14;
    const tiltX = (0.5 - y) * 10;

    setPaneStyle({
      "--tilt-x": `${tiltX.toFixed(2)}deg`,
      "--tilt-y": `${tiltY.toFixed(2)}deg`,
      "--glow-x": `${(x * 100).toFixed(1)}%`,
      "--glow-y": `${(y * 100).toFixed(1)}%`,
    } as CSSProperties);
  }

  function resetPaneTilt() {
    setPaneStyle({
      "--tilt-x": "0deg",
      "--tilt-y": "0deg",
      "--glow-x": "50%",
      "--glow-y": "42%",
    } as CSSProperties);
  }

  function activateWidget(id: WidgetId) {
    setActiveWidget(id);
  }

  function activateWidgetWithKeyboard(event: KeyboardEvent<HTMLElement>, id: WidgetId) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activateWidget(id);
    }
  }

  function setRailMode(id: string) {
    setActiveRail(id);

    if (id === "galeria") {
      window.history.replaceState(null, "", "#galeria");
      return;
    }

    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
  }

  return (
    <main className="interface-shell">
      <div className="scene-depth" />
      <div className="light-sweep" />
      <div className="noise-layer" />

      <header className="hud-topbar">
        <a className="brand-core" href="#top" aria-label="Holographic interface home">
          <Cpu size={28} />
          <span>Hologram OS</span>
        </a>

        <nav className="hud-tabs" aria-label="Navegacion principal">
          {navItems.map((item) => (
            <button
              className={activeNav === item ? "hud-tab active" : "hud-tab"}
              key={item}
              onClick={() => setActiveNav(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="top-actions">
          <button aria-label="Buscar" className="icon-control" type="button">
            <Search size={20} />
          </button>
          <button aria-label="Activar microfono" className="icon-control" type="button">
            <Mic size={20} />
          </button>
          <button aria-label="Notificaciones" className="icon-control" type="button">
            <Bell size={20} />
          </button>
        </div>
      </header>

      <section className="command-layout" id="top">
        <aside className="command-rail" aria-label="Herramientas">
          <button className="rail-menu" type="button" aria-label="Menu">
            <Menu size={22} />
          </button>
          {railItems.map(({ icon: Icon, id, label }) => (
            <button
              aria-label={label}
              aria-pressed={activeRail === id}
              className={activeRail === id ? "rail-button active" : "rail-button"}
              key={label}
              onClick={() => setRailMode(id)}
              type="button"
            >
              <Icon size={22} />
              <span>{label}</span>
            </button>
          ))}
        </aside>

        <section className="glass-viewport" aria-label="Dashboard holografico">
          <div className="viewport-frame">
            <div className="viewport-header">
              <div>
                <span className="overline">{activeRail === "galeria" ? "Creative archive" : "Live interface"}</span>
                <h1>{activeRail === "galeria" ? "Galeria holografica de renders" : "Superficie holografica de datos"}</h1>
              </div>
              <div className="status-cluster">
                <span><CircleDot size={15} /> {activeRail === "galeria" ? "Gallery mode" : "Online"}</span>
                <span><Zap size={15} /> {activeRail === "galeria" ? "Projection sync" : "Low latency"}</span>
              </div>
            </div>

            <div
              className={activeRail === "galeria" ? "hologram-pane gallery-mode" : "hologram-pane"}
              onPointerLeave={resetPaneTilt}
              onPointerMove={handlePanePointerMove}
              style={paneStyle}
            >
              <div className="pane-edge edge-a" />
              <div className="pane-edge edge-b" />
              <div className="pane-reflection reflection-a" />
              <div className="pane-reflection reflection-b" />
              <div className="pane-touch touch-a" />
              <div className="pane-touch touch-b" />

              {activeRail === "galeria" ? (
                <GalleryProjection />
              ) : (
                <>
                  <article
                    aria-pressed={activeWidget === "daily"}
                    className={activeWidget === "daily" ? "glass-widget daily-widget active" : "glass-widget daily-widget"}
                    onClick={() => activateWidget("daily")}
                    onKeyDown={(event) => activateWidgetWithKeyboard(event, "daily")}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="widget-title">
                      <span>Daily Signups</span>
                      <small>Updated 3 min ago</small>
                    </div>
                    <TrendChart />
                  </article>

                  <article
                    aria-pressed={activeWidget === "sales"}
                    className={activeWidget === "sales" ? "glass-widget sales-widget active" : "glass-widget sales-widget"}
                    onClick={() => activateWidget("sales")}
                    onKeyDown={(event) => activateWidgetWithKeyboard(event, "sales")}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="widget-title">
                      <span>Monthly Sales</span>
                      <small>May sales 73.2M</small>
                    </div>
                    <AreaChart />
                  </article>

                  <article
                    aria-pressed={activeWidget === "conversion"}
                    className={activeWidget === "conversion" ? "glass-widget conversion-widget active" : "glass-widget conversion-widget"}
                    onClick={() => activateWidget("conversion")}
                    onKeyDown={(event) => activateWidgetWithKeyboard(event, "conversion")}
                    role="button"
                    tabIndex={0}
                  >
                    <RingGauge value="234deg" label="65%" className="large" />
                    <span>Gross profit margin</span>
                  </article>

                  <article
                    aria-pressed={activeWidget === "retention"}
                    className={activeWidget === "retention" ? "glass-widget retention-widget active" : "glass-widget retention-widget"}
                    onClick={() => activateWidget("retention")}
                    onKeyDown={(event) => activateWidgetWithKeyboard(event, "retention")}
                    role="button"
                    tabIndex={0}
                  >
                    <RingGauge value="133deg" label="37%" />
                    <span>Operating margin</span>
                  </article>

                  <article
                    aria-pressed={activeWidget === "bars"}
                    className={activeWidget === "bars" ? "glass-widget bars-widget active" : "glass-widget bars-widget"}
                    onClick={() => activateWidget("bars")}
                    onKeyDown={(event) => activateWidgetWithKeyboard(event, "bars")}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="widget-title">
                      <span>Profit and loss summary</span>
                      <small>Last 24 hours</small>
                    </div>
                    <MiniBars />
                  </article>

                  <article
                    aria-pressed={activeWidget === "map"}
                    className={activeWidget === "map" ? "glass-widget map-widget active" : "glass-widget map-widget"}
                    onClick={() => activateWidget("map")}
                    onKeyDown={(event) => activateWidgetWithKeyboard(event, "map")}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="widget-title">
                      <span>Global activity</span>
                      <small>Nodes by product</small>
                    </div>
                    <WorldMap />
                  </article>

                  <article
                    aria-pressed={activeWidget === "radar"}
                    className={activeWidget === "radar" ? "glass-widget radar-widget active" : "glass-widget radar-widget"}
                    onClick={() => activateWidget("radar")}
                    onKeyDown={(event) => activateWidgetWithKeyboard(event, "radar")}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="widget-title">
                      <span>System vector</span>
                    </div>
                    <RadarGraph />
                  </article>

                  <div className="pane-readout" aria-live="polite">
                    <span>{widgetDetails[activeWidget][0]}</span>
                    <strong>{widgetDetails[activeWidget][1]}</strong>
                  </div>
                </>
              )}
            </div>
          </div>

          <aside className="floating-insights">
            <article className="insight-card">
              <Activity size={22} />
              <div>
                <strong>65%</strong>
                <span>Growth rate</span>
              </div>
            </article>
            <article className="insight-card">
              <Gauge size={22} />
              <div>
                <strong>37%</strong>
                <span>Conversion</span>
              </div>
            </article>
            <article className="insight-card">
              <Radar size={22} />
              <div>
                <strong>98.4</strong>
                <span>Signal score</span>
              </div>
            </article>
          </aside>
        </section>
      </section>

      <section className="metric-strip" aria-label="Metricas principales">
        {metricTiles.map(([value, label, trend]) => (
          <article className="metric-tile" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
            <small>{trend}</small>
          </article>
        ))}
      </section>

      <section className="lower-grid" aria-label="Paneles secundarios">
        <article className="lower-panel wide-panel">
          <div className="panel-heading">
            <div>
              <span className="overline">Realtime</span>
              <h2>Rendimiento por canales</h2>
            </div>
            <BarChart3 size={23} />
          </div>
          <TrendChart compact />
        </article>

        <article className="lower-panel">
          <div className="panel-heading">
            <div>
              <span className="overline">Modules</span>
              <h2>Estado activo</h2>
            </div>
            <Layers3 size={23} />
          </div>
          <div className="activity-table">
            {activityRows.map(([name, state, value]) => (
              <div key={name}>
                <span>{name}</span>
                <em>{state}</em>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="lower-panel">
          <div className="panel-heading">
            <div>
              <span className="overline">Creative stack</span>
              <h2>Acciones</h2>
            </div>
            <Sparkles size={23} />
          </div>
          <div className="action-grid">
            <button type="button"><MousePointer2 size={18} /> Explorar</button>
            <button type="button"><Globe2 size={18} /> Publicar</button>
            <button type="button"><Braces size={18} /> Integrar API</button>
          </div>
        </article>
      </section>
    </main>
  );
}
