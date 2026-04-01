const storageKey = 'backend-study-state-v2';
const collapseKey = 'backend-study-collapse-v1';

const k = (term, note = '') => ({ term, note });

const topics = [
  {
    id: 'database',
    title: 'Database',
    hint: 'Full checklist từ nền tảng, query, tối ưu tới bảo mật.',
    groups: [
      {
        title: 'Khái niệm nền tảng',
        sub: 'Mô hình dữ liệu & nguyên lý căn bản.',
        keywords: [
          k('RDBMS'),
          k('NoSQL'),
          k('OLTP vs OLAP'),
          k('ACID'),
          k('CAP'),
          k('BASE'),
          k('Schema'),
          k('DDL/DML/DCL/TCL'),
          k('Data Modeling'),
          k('ERD'),
          k('Normalization 1NF-5NF'),
          k('Denormalization')
        ]
      },
      {
        title: 'Hệ quản trị phổ biến',
        sub: 'Chọn công cụ phù hợp từng workload.',
        keywords: [
          k('PostgreSQL'),
          k('MySQL'),
          k('MariaDB'),
          k('SQLite'),
          k('Oracle'),
          k('SQL Server'),
          k('MongoDB'),
          k('Redis'),
          k('Cassandra'),
          k('Elasticsearch'),
          k('ClickHouse'),
          k('Snowflake'),
          k('BigQuery')
        ]
      },
      {
        title: 'Ngôn ngữ truy vấn',
        sub: 'Viết và tổ chức câu lệnh SQL hiệu quả.',
        keywords: [
          k('SQL căn bản'),
          k('SELECT/FROM/WHERE/GROUP/HAVING/ORDER'),
          k('JOIN (Inner/Left/Right/Full/Cross)'),
          k('Subquery'),
          k('CTE / WITH'),
          k('Window Functions'),
          k('Stored Procedure'),
          k('Trigger'),
          k('View'),
          k('Materialized View'),
          k('Prepared Statement'),
          k('Cursor')
        ]
      },
      {
        title: 'Lưu trữ & cấu trúc dữ liệu',
        sub: 'Bên trong engine lưu & đọc dữ liệu ra sao.',
        keywords: [
          k('Page / Extent'),
          k('Heap vs Clustered'),
          k('B-Tree'),
          k('Hash Index'),
          k('GIN / GIST'),
          k('Columnar Storage'),
          k('Partitioning (Range/List/Hash)'),
          k('Sharding'),
          k('Replication'),
          k('Write-Ahead Logging (WAL)'),
          k('Checkpoint'),
          k('Snapshot'),
          k('MVCC')
        ]
      },
      {
        title: 'Xử lý dữ liệu & ETL/ELT',
        sub: 'Luồng dữ liệu, batch vs streaming.',
        keywords: [
          k('Data Pipeline'),
          k('Batch vs Streaming'),
          k('Kafka'),
          k('Spark'),
          k('Flink'),
          k('Airflow'),
          k('dbt'),
          k('CDC (Change Data Capture)'),
          k('Data Lake'),
          k('Data Warehouse'),
          k('Data Mart'),
          k('Star Schema'),
          k('Snowflake Schema')
        ]
      },
      {
        title: 'Tối ưu truy vấn',
        sub: 'Giảm chi phí, tăng tốc bằng index và plan.',
        keywords: [
          k('Execution Plan / EXPLAIN'),
          k('Cost-Based Optimizer'),
          k('Index Tuning'),
          k('Sargable Predicate'),
          k('Statistics'),
          k('Cardinality Estimation'),
          k('Join Order'),
          k('Join Algorithms (Nested Loop / Hash / Merge)'),
          k('Predicate Pushdown'),
          k('Parallel Query'),
          k('Caching'),
          k('Query Rewriting'),
          k('Connection Pooling')
        ]
      },
      {
        title: 'Hiệu năng & vận hành',
        sub: 'Theo dõi, vận hành ổn định.',
        keywords: [
          k('Latency / Throughput'),
          k('Connection Limits'),
          k('Locking / Blocking / Deadlock'),
          k('Isolation Levels'),
          k('Hotspot'),
          k('Vacuum / Autovacuum'),
          k('Auto-analyze'),
          k('Resource Governor'),
          k('Scale Up / Scale Out'),
          k('Load Balancing'),
          k('Failover'),
          k('Backup / Restore'),
          k('Point-in-Time Recovery')
        ]
      },
      {
        title: 'Bảo mật',
        sub: 'Bảo vệ dữ liệu và quyền truy cập.',
        keywords: [
          k('Authentication (Password/SSO/OAuth)'),
          k('Authorization / GRANT / REVOKE'),
          k('Row-Level Security'),
          k('Encryption at Rest'),
          k('Encryption in Transit (TLS)'),
          k('TDE'),
          k('KMS / HSM'),
          k('Least Privilege'),
          k('Audit Logging'),
          k('SQL Injection'),
          k('Parameterization'),
          k('Secrets Management'),
          k('Data Masking / Tokenization'),
          k('GDPR / PII compliance')
        ]
      },
      {
        title: 'Độ tin cậy & nhất quán',
        sub: 'Đảm bảo dữ liệu đúng và sống sót qua sự cố.',
        keywords: [
          k('Consensus (Raft / Paxos)'),
          k('Quorum'),
          k('Leader / Follower'),
          k('Eventual Consistency'),
          k('Strong Consistency'),
          k('Read/Write Concern'),
          k('Idempotency'),
          k('Exactly-Once vs At-Least-Once'),
          k('Retry / Backoff'),
          k('Circuit Breaker')
        ]
      },
      {
        title: 'Kiến trúc nâng cao',
        sub: 'Kết hợp DB trong kiến trúc hệ thống lớn.',
        keywords: [
          k('Microservices + Database per Service'),
          k('CQRS'),
          k('Event Sourcing'),
          k('HTAP'),
          k('Vector Database'),
          k('Time-Series DB'),
          k('Graph DB (Cypher / Gremlin)'),
          k('Geo-spatial'),
          k('Full-text Search'),
          k('Data Governance'),
          k('Metadata Catalog'),
          k('Data Lineage')
        ]
      }
    ]
  },
  {
    id: 'network',
    title: 'Network',
    hint: 'Nắm giao thức, delivery, realtime và quan sát.',
    groups: [
      {
        title: 'Nền tảng',
        sub: 'OSI/TCP-IP, kết nối và truyền tải.',
        keywords: [
          k('OSI Model'),
          k('TCP vs UDP'),
          k('Three-way Handshake'),
          k('Congestion Control'),
          k('MTU / MSS'),
          k('Ports & Sockets')
        ]
      },
      {
        title: 'HTTP',
        sub: 'Giao thức web phổ biến.',
        keywords: [
          k('HTTP/1.1'),
          k('HTTP/2'),
          k('HTTP/3 (QUIC)'),
          k('Methods & Status Codes'),
          k('Headers & Caching'),
          k('Content Negotiation'),
          k('Keep-Alive / Connection Reuse')
        ]
      },
      {
        title: 'TLS & bảo mật truyền tải',
        sub: 'Bảo vệ dữ liệu trên đường truyền.',
        keywords: [
          k('TLS Handshake'),
          k('Certificates / CA chain'),
          k('ALPN / SNI'),
          k('HSTS'),
          k('mTLS')
        ]
      },
      {
        title: 'DNS',
        sub: 'Phân giải tên miền.',
        keywords: [
          k('A / AAAA / CNAME'),
          k('TTL & Caching'),
          k('Recursive vs Authoritative'),
          k('DNS over HTTPS / TLS'),
          k('Split DNS')
        ]
      },
      {
        title: 'API & giao tiếp dịch vụ',
        sub: 'Kiểu giao tiếp và contract.',
        keywords: [
          k('REST'),
          k('gRPC'),
          k('GraphQL'),
          k('Idempotency keys'),
          k('Pagination / Filtering'),
          k('Rate Limit header'),
          k('Versioning')
        ]
      },
      {
        title: 'Realtime',
        sub: 'Kênh thời gian thực.',
        keywords: [
          k('WebSocket'),
          k('Server-Sent Events'),
          k('Long Polling'),
          k('Backpressure'),
          k('Reconnect strategy')
        ]
      },
      {
        title: 'Delivery & cân bằng tải',
        sub: 'Điều phối lưu lượng.',
        keywords: [
          k('Load Balancer L4/L7'),
          k('Health Check'),
          k('Sticky Session'),
          k('Blue/Green, Canary'),
          k('Reverse Proxy / API Gateway')
        ]
      },
      {
        title: 'Caching & CDN',
        sub: 'Giảm latency, giảm tải origin.',
        keywords: [
          k('Cache-Control / ETag'),
          k('Stale-While-Revalidate'),
          k('Edge Cache'),
          k('Content Invalidation'),
          k('Object Storage + CDN')
        ]
      },
      {
        title: 'Quan sát & sự cố',
        sub: 'Theo dõi và xử lý lỗi.',
        keywords: [
          k('Distributed Tracing'),
          k('Trace/Span Id propagation'),
          k('OpenTelemetry'),
          k('Circuit Breaker'),
          k('Retry + Backoff')
        ]
      }
    ]
  },
  {
    id: 'patterns',
    title: 'Design Patterns',
    hint: 'Thiết kế code & kiến trúc giữ cho dễ bảo trì.',
    groups: [
      {
        title: 'Nguyên lý',
        sub: 'Guideline nền tảng.',
        keywords: [
          k('SOLID'),
          k('KISS / YAGNI'),
          k('Domain-Driven Design'),
          k('Dependency Injection')
        ]
      },
      {
        title: 'Creational',
        sub: 'Khởi tạo đối tượng.',
        keywords: [
          k('Factory Method'),
          k('Abstract Factory'),
          k('Builder'),
          k('Prototype'),
          k('Singleton (cân nhắc)')
        ]
      },
      {
        title: 'Structural',
        sub: 'Tổ chức và kết nối thành phần.',
        keywords: [
          k('Adapter'),
          k('Facade'),
          k('Decorator'),
          k('Composite'),
          k('Proxy'),
          k('Bridge')
        ]
      },
      {
        title: 'Behavioral',
        sub: 'Trao đổi hành vi giữa đối tượng.',
        keywords: [
          k('Strategy'),
          k('Observer'),
          k('Command'),
          k('State'),
          k('Template Method'),
          k('Chain of Responsibility'),
          k('Mediator')
        ]
      },
      {
        title: 'Kiến trúc ứng dụng',
        sub: 'Tầng & luồng nghiệp vụ.',
        keywords: [
          k('Clean / Hexagonal Architecture'),
          k('Ports & Adapters'),
          k('Repository Pattern'),
          k('Unit of Work'),
          k('Saga / Workflow Orchestration'),
          k('Event Sourcing'),
          k('CQRS')
        ]
      },
      {
        title: 'Độ tin cậy & hiệu năng',
        sub: 'Ổn định khi có lỗi và tải cao.',
        keywords: [
          k('Circuit Breaker'),
          k('Bulkhead'),
          k('Retry + Backoff'),
          k('Idempotency'),
          k('Caching Layer'),
          k('Message Queue / Event Bus')
        ]
      },
      {
        title: 'Concurrency',
        sub: 'Xử lý song song.',
        keywords: [
          k('Producer / Consumer'),
          k('Thread Pool'),
          k('Actor Model'),
          k('Immutable Data'),
          k('Async/Await flow')
        ]
      }
    ]
  },
  {
    id: 'security',
    title: 'Security',
    hint: 'Bảo vệ ứng dụng, dữ liệu và tuân thủ.',
    groups: [
      {
        title: 'Nhận thực & phân quyền',
        sub: 'Ai bạn cho vào, được làm gì.',
        keywords: [
          k('AuthN vs AuthZ'),
          k('RBAC / ABAC'),
          k('OAuth2 / OIDC'),
          k('JWT / JTI blacklist'),
          k('Session hardening'),
          k('MFA / TOTP')
        ]
      },
      {
        title: 'Quản lý mật khẩu & secrets',
        sub: 'Không để lộ bí mật.',
        keywords: [
          k('Hashing (bcrypt / argon2)'),
          k('Salt / Pepper'),
          k('Rate limit login'),
          k('Secrets Manager / KMS'),
          k('Secret rotation'),
          k('No secrets in repo/log')
        ]
      },
      {
        title: 'Bảo vệ đầu vào & giao diện',
        sub: 'Ngăn tấn công phổ biến.',
        keywords: [
          k('SQL Injection'),
          k('XSS'),
          k('Template Injection'),
          k('Input Validation / Encoding'),
          k('CSRF'),
          k('Clickjacking')
        ]
      },
      {
        title: 'Truyền tải & lưu trữ an toàn',
        sub: 'Mã hóa và kiểm soát dữ liệu.',
        keywords: [
          k('TLS everywhere'),
          k('HSTS'),
          k('Encryption at Rest / TDE'),
          k('Key rotation'),
          k('PII masking')
        ]
      },
      {
        title: 'Giám sát & ứng phó',
        sub: 'Phát hiện và phản ứng nhanh.',
        keywords: [
          k('Audit Logging'),
          k('SIEM alerts'),
          k('Tamper-evident logs'),
          k('Dependency scanning'),
          k('SAST / DAST'),
          k('Incident response playbook')
        ]
      },
      {
        title: 'Tuân thủ & rủi ro',
        sub: 'Quản trị dữ liệu & pháp lý.',
        keywords: [
          k('GDPR / PII'),
          k('Data Retention'),
          k('DPIA'),
          k('Privacy by Design'),
          k('Vendor risk'),
          k('Business Continuity')
        ]
      }
    ]
  }
];

/* ─── Collapse state ──────────────────────────────── */
let collapseState = {};
try {
  collapseState = JSON.parse(localStorage.getItem(collapseKey) || '{}');
} catch (e) {
  collapseState = {};
}

function saveCollapseState() {
  localStorage.setItem(collapseKey, JSON.stringify(collapseState));
}

function isCollapsed(topicId, groupIndex) {
  return collapseState[`${topicId}-${groupIndex}`] === true;
}

function setCollapsed(topicId, groupIndex, collapsed) {
  collapseState[`${topicId}-${groupIndex}`] = collapsed;
  saveCollapseState();
}

/* ─── Filtering ───────────────────────────────────── */
const requestedIds = (() => {
  const bodyAttr = document.body?.dataset?.topics || '';
  const queryAttr = new URLSearchParams(window.location.search).get('topics') || '';
  const raw = (bodyAttr || queryAttr || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);
  return Array.from(new Set(raw));
})();

const isDashboard = document.body?.dataset?.mode === 'dashboard';
const activeTopics = isDashboard ? topics : topics.filter(t => requestedIds.length === 0 || requestedIds.includes(t.id));
const state = loadState(activeTopics);

/* ─── Init ────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  if (isDashboard) {
    renderDashboard();
    refreshSummary();
  } else {
    renderNav();
    renderSections();
    refreshSummary();
    if (activeTopics.length === 0) {
      document.getElementById('content').innerHTML =
        '<div style="color:var(--text-secondary);padding:24px;text-align:center">Không tìm thấy chủ đề. Kiểm tra tham số topics.</div>';
    }
  }
});

/* ─── Helpers ─────────────────────────────────────── */
function topicById(id) {
  return activeTopics.find(t => t.id === id);
}

function loadState(list) {
  let parsed = {};
  try {
    parsed = JSON.parse(localStorage.getItem(storageKey) || '{}');
  } catch (e) {
    parsed = {};
  }
  const next = {};
  list.forEach(topic => {
    next[topic.id] = topic.groups.map((group, gi) => {
      const savedGroup = parsed?.[topic.id]?.[gi];
      if (Array.isArray(savedGroup) && savedGroup.length === group.keywords.length) {
        return savedGroup.map(v => (v ? 1 : 0));
      }
      return new Array(group.keywords.length).fill(0);
    });
  });
  return next;
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function totalCount(topicId) {
  const topic = topicById(topicId);
  if (!topic) return 0;
  return topic.groups.reduce((acc, g) => acc + g.keywords.length, 0);
}

function doneCount(topicId) {
  const arr = state[topicId] || [];
  return arr.flat().filter(Boolean).length;
}

function groupDone(topicId, groupIndex) {
  return (state[topicId]?.[groupIndex] || []).filter(Boolean).length;
}

/* ─── Render Nav (topic quick-jump) ───────────────── */
function renderNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  nav.innerHTML = '';
  activeTopics.forEach(topic => {
    const button = document.createElement('button');
    const done = doneCount(topic.id);
    const total = totalCount(topic.id);
    button.innerHTML = `${topic.title}<span class="nav-count">${done}/${total}</span>`;
    button.addEventListener('click', () => {
      document.getElementById(topic.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    nav.appendChild(button);
  });
}

/* ─── SVG Icons ───────────────────────────────────── */
/* ─── Dashboard config ────────────────────────────── */
const topicMeta = {
  database: {
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.08)',
    link: 'study-database.html',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>',
  },
  network: {
    color: '#16a34a',
    bg: 'rgba(22,163,74,0.08)',
    link: 'study-network.html',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  },
  patterns: {
    color: '#7c3aed',
    bg: 'rgba(124,58,237,0.08)',
    link: 'study-patterns.html',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
  },
  security: {
    color: '#ea580c',
    bg: 'rgba(234,88,12,0.08)',
    link: 'study-security.html',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  },
};

const arrowSvg = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>';

/* ─── Render Dashboard ────────────────────────────── */
function renderDashboard() {
  const content = document.getElementById('content');
  if (!content) return;

  const grid = document.createElement('div');
  grid.className = 'dashboard-grid';

  topics.forEach(topic => {
    const meta = topicMeta[topic.id] || {};
    const done = doneCount(topic.id);
    const total = totalCount(topic.id);
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;

    const card = document.createElement('a');
    card.className = 'dash-card';
    card.href = meta.link || '#';
    card.style.setProperty('--card-color', meta.color || 'var(--accent)');
    card.style.setProperty('--card-bg', meta.bg || 'var(--accent-glow)');

    card.innerHTML = `
      <div class="dash-card-icon" style="background:${meta.bg};color:${meta.color}">
        ${meta.icon || ''}
      </div>
      <div>
        <h3>${topic.title}</h3>
        <div class="dash-hint">${topic.hint}</div>
      </div>
      <div class="dash-groups">
        ${topic.groups.map(g => `<span class="dash-group-chip">${g.title}</span>`).join('')}
      </div>
      <div class="dash-progress">
        <div class="dash-progress-fill" style="width:${pct}%;background:${meta.color}"></div>
      </div>
      <div class="dash-meta">
        <span><strong>${done}</strong> / ${total} keywords</span>
        <span>${topic.groups.length} nhóm</span>
        <span>${pct}%</span>
      </div>
      <div class="dash-arrow">${arrowSvg}</div>
    `;

    grid.appendChild(card);
  });

  content.appendChild(grid);

  const nav = document.getElementById('nav');
  if (nav) nav.style.display = 'none';
}

/* ─── SVG Icons ───────────────────────────────────── */
const chevronSvg = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6l4 4 4-4"/></svg>';
const copySvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>';

/* ─── Render Sections ─────────────────────────────── */
function renderSections() {
  const content = document.getElementById('content');
  if (!content) return;
  content.innerHTML = '';

  activeTopics.forEach(topic => {
    const section = document.createElement('section');
    section.className = 'section';
    section.id = topic.id;

    const done = doneCount(topic.id);
    const total = totalCount(topic.id);
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;

    section.innerHTML = `
      <div class="section-header">
        <div>
          <h2>${topic.title}</h2>
          <div class="hint">${topic.hint}</div>
        </div>
        <div class="section-actions">
          <button class="btn accent" data-action="copy-topic">${copySvg} Copy all</button>
          <button class="btn green" data-action="mark-topic">Tick hết</button>
          <button class="btn" data-action="clear-topic">Bỏ hết</button>
          <button class="btn" data-action="expand-all">Mở hết</button>
          <button class="btn" data-action="collapse-all">Thu hết</button>
          <span class="badge-count"><strong id="badge-${topic.id}">${done}</strong>/${total}</span>
          <div class="progress-bar"><div class="progress-bar-fill" id="pbar-${topic.id}" style="width:${pct}%"></div></div>
        </div>
      </div>
      <div class="group-grid"></div>
    `;

    const grid = section.querySelector('.group-grid');

    topic.groups.forEach((group, gi) => {
      const card = document.createElement('div');
      card.className = 'group-card' + (isCollapsed(topic.id, gi) ? ' collapsed' : '');
      card.dataset.topicId = topic.id;
      card.dataset.groupIndex = gi;

      const gDone = groupDone(topic.id, gi);
      const gTotal = group.keywords.length;

      card.innerHTML = `
        <div class="group-head">
          <div class="group-head-left">
            <div class="group-toggle">${chevronSvg}</div>
            <div>
              <h3>${group.title}</h3>
              <div class="sub">${group.sub || ''}</div>
            </div>
          </div>
          <div class="group-head-right">
            <button class="btn" data-act="copy">${copySvg}</button>
            <button class="btn green" data-act="mark">Tick</button>
            <button class="btn" data-act="clear">Bỏ</button>
            <span class="badge-count"><strong id="badge-${topic.id}-${gi}">${gDone}</strong>/${gTotal}</span>
          </div>
        </div>
        <div class="group-body">
          <div class="list"></div>
        </div>
      `;

      const head = card.querySelector('.group-head');
      head.addEventListener('click', (e) => {
        if (e.target.closest('.btn')) return;
        const isNowCollapsed = !card.classList.contains('collapsed');
        card.classList.toggle('collapsed', isNowCollapsed);
        setCollapsed(topic.id, gi, isNowCollapsed);
      });

      const list = card.querySelector('.list');
      group.keywords.forEach((kw, ki) => {
        const item = document.createElement('div');
        item.className = 'item';
        const checkboxId = `${topic.id}-${gi}-${ki}`;
        item.innerHTML = `
          <div class="item-left">
            <input type="checkbox" id="${checkboxId}" ${state[topic.id][gi][ki] ? 'checked' : ''} />
            <div>
              <label for="${checkboxId}">${kw.term}</label>
              ${kw.note ? `<div class="desc">${kw.note}</div>` : ''}
            </div>
          </div>
          <div class="actions">
            <button class="icon-btn" title="Copy keyword" aria-label="Copy" data-copy="${kw.term}">${copySvg}</button>
          </div>
        `;

        const checkbox = item.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', () => {
          state[topic.id][gi][ki] = checkbox.checked ? 1 : 0;
          saveState();
          refreshGroup(topic.id, gi);
          refreshTopic(topic.id);
        });

        const copyBtn = item.querySelector('[data-copy]');
        copyBtn.addEventListener('click', () => copyText(kw.term));

        list.appendChild(item);
      });

      const groupButtons = card.querySelectorAll('[data-act]');
      groupButtons.forEach(btn => {
        const act = btn.getAttribute('data-act');
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (act === 'copy') copyGroup(topic.id, gi);
          if (act === 'mark') setGroup(topic.id, gi, 1);
          if (act === 'clear') setGroup(topic.id, gi, 0);
        });
      });

      grid.appendChild(card);
    });

    section.querySelector('[data-action="copy-topic"]')?.addEventListener('click', () => copyTopic(topic.id));
    section.querySelector('[data-action="mark-topic"]')?.addEventListener('click', () => setTopic(topic.id, 1));
    section.querySelector('[data-action="clear-topic"]')?.addEventListener('click', () => setTopic(topic.id, 0));
    section.querySelector('[data-action="expand-all"]')?.addEventListener('click', () => toggleAllGroups(topic.id, false));
    section.querySelector('[data-action="collapse-all"]')?.addEventListener('click', () => toggleAllGroups(topic.id, true));

    content.appendChild(section);
  });
}

/* ─── Toggle all groups in a topic ────────────────── */
function toggleAllGroups(topicId, collapsed) {
  const topic = topicById(topicId);
  if (!topic) return;
  const section = document.getElementById(topicId);
  if (!section) return;
  const cards = section.querySelectorAll('.group-card');
  cards.forEach((card, gi) => {
    card.classList.toggle('collapsed', collapsed);
    collapseState[`${topicId}-${gi}`] = collapsed;
  });
  saveCollapseState();
}

/* ─── State mutations ─────────────────────────────── */
function setGroup(topicId, groupIndex, value) {
  const topic = topicById(topicId);
  if (!topic) return;
  state[topicId][groupIndex] = state[topicId][groupIndex].map(() => value ? 1 : 0);
  saveState();
  topic.groups[groupIndex].keywords.forEach((_, ki) => {
    const cb = document.getElementById(`${topicId}-${groupIndex}-${ki}`);
    if (cb) cb.checked = !!value;
  });
  refreshGroup(topicId, groupIndex);
  refreshTopic(topicId);
}

function setTopic(topicId, value) {
  const topic = topicById(topicId);
  if (!topic) return;
  state[topicId] = state[topicId].map(groupArr => groupArr.map(() => value ? 1 : 0));
  saveState();
  topic.groups.forEach((group, gi) => {
    group.keywords.forEach((_, ki) => {
      const cb = document.getElementById(`${topicId}-${gi}-${ki}`);
      if (cb) cb.checked = !!value;
    });
  });
  refreshTopic(topicId);
  topic.groups.forEach((_, gi) => refreshGroup(topicId, gi));
}

/* ─── Refresh badges & progress ───────────────────── */
function refreshGroup(topicId, groupIndex) {
  const badge = document.getElementById(`badge-${topicId}-${groupIndex}`);
  const topic = topicById(topicId);
  if (badge && topic) {
    badge.textContent = groupDone(topicId, groupIndex);
  }
}

function refreshTopic(topicId) {
  const badge = document.getElementById(`badge-${topicId}`);
  const topic = topicById(topicId);
  if (badge && topic) badge.textContent = doneCount(topicId);

  const pbar = document.getElementById(`pbar-${topicId}`);
  if (pbar && topic) {
    const total = totalCount(topicId);
    const done = doneCount(topicId);
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;
    pbar.style.width = pct + '%';
  }

  refreshSummary();
  renderNav();
}

function refreshSummary() {
  const total = activeTopics.reduce((acc, t) => acc + totalCount(t.id), 0);
  const done = activeTopics.reduce((acc, t) => acc + doneCount(t.id), 0);
  const elTotal = document.getElementById('summaryTotal');
  const elDone = document.getElementById('summaryDone');
  if (elTotal) elTotal.textContent = total;
  if (elDone) elDone.textContent = done;
}

/* ─── Copy helpers ────────────────────────────────── */
function copyGroup(topicId, groupIndex) {
  const topic = topicById(topicId);
  if (!topic) return;
  const group = topic.groups[groupIndex];
  copyText(group.keywords.map(k => k.term).join('\n'));
}

function copyTopic(topicId) {
  const topic = topicById(topicId);
  if (!topic) return;
  const text = topic.groups.flatMap(g => g.keywords.map(k => k.term)).join('\n');
  copyText(text);
}

function copyText(text) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast('Copied!'));
  } else {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('Copied!');
  }
}

/* ─── Toast ───────────────────────────────────────── */
let toastTimer;
function showToast(message) {
  const toast = getToast();
  toast.textContent = message;
  toast.style.opacity = '1';
  toast.style.transform = 'translateY(0)';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
  }, 1400);
}

function getToast() {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.style.opacity = '0';
  toast.style.transform = 'translateY(8px)';
  return toast;
}
