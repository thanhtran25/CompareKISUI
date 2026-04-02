const storageKey = 'backend-study-state-v2';
const collapseKey = 'backend-study-collapse-v1';

/* difficulty: e=easy, m=medium, h=hard | priority: 1=high, 2=medium, 3=low */
const kwMeta = {
  'RDBMS':'e1','NoSQL':'e1','OLTP vs OLAP':'m2','ACID':'e1','CAP':'m1','BASE':'m2',
  'Schema':'e1','DDL/DML/DCL/TCL':'e1','Data Modeling':'m1','ERD':'e1',
  'Normalization 1NF-5NF':'m1','Denormalization':'m2',
  'PostgreSQL':'e1','MySQL':'e1','MariaDB':'e3','SQLite':'e2',
  'Oracle':'m3','SQL Server':'m3','MongoDB':'e1','Redis':'e1',
  'Cassandra':'m2','Elasticsearch':'m2','ClickHouse':'h3','Snowflake':'m3','BigQuery':'m3',
  'SQL căn bản':'e1','SELECT/FROM/WHERE/GROUP/HAVING/ORDER':'e1',
  'JOIN (Inner/Left/Right/Full/Cross)':'e1','Subquery':'e1',
  'CTE / WITH':'m1','Window Functions':'m1','Stored Procedure':'m2',
  'Trigger':'m2','View':'e1','Materialized View':'m2',
  'Prepared Statement':'e1','Cursor':'m3',
  'Page / Extent':'h3','Heap vs Clustered':'m2','B-Tree':'m1','Hash Index':'m2',
  'GIN / GIST':'h3','Columnar Storage':'m2','Partitioning (Range/List/Hash)':'m1',
  'Sharding':'h1','Replication':'m1','Write-Ahead Logging (WAL)':'h2',
  'Checkpoint':'h2','Snapshot':'m2','MVCC':'h2',
  'Indexing':'e1','Clustering':'m2','LSM Tree':'h3','Bloom Filter':'h3',
  'Row-based Storage':'e2','Compaction':'h3','Data Locality':'m2',
  'Time-series Partitioning':'m3','Logical Replication':'h2','Physical Replication':'h2',
  'Data Pipeline':'m1','Batch vs Streaming':'m1','Kafka':'m1',
  'Spark':'m2','Flink':'h3','Airflow':'m2','dbt':'m2',
  'CDC (Change Data Capture)':'m2','Data Lake':'m2','Data Warehouse':'m1',
  'Data Mart':'m3','Star Schema':'m2','Snowflake Schema':'m3',
  'Data Migration':'m2','Schema Evolution':'h2','Schema Registry':'h2',
  'Execution Plan / EXPLAIN':'m1','Cost-Based Optimizer':'h2','Index Tuning':'m1',
  'Sargable Predicate':'m2','Statistics':'m2','Cardinality Estimation':'h2',
  'Join Order':'m2','Join Algorithms (Nested Loop / Hash / Merge)':'h2',
  'Predicate Pushdown':'h3','Parallel Query':'h3','Caching':'e1',
  'Query Rewriting':'h3','Connection Pooling':'m1','Query Optimization':'m1',
  'Query Planner':'h2','Composite Index':'m1','Covering Index':'m2','Secondary Indexes':'m2',
  'Latency / Throughput':'e1','Connection Limits':'m2',
  'Locking / Blocking / Deadlock':'m1','Isolation Levels':'m1',
  'Hotspot':'m2','Vacuum / Autovacuum':'h2','Auto-analyze':'h3',
  'Resource Governor':'h3','Scale Up / Scale Out':'e1','Load Balancing':'e1',
  'Failover':'m1','Backup / Restore':'m1','Point-in-Time Recovery':'h2',
  'Snapshot Isolation':'h2','Lock Escalation':'h3',
  'Optimistic Locking':'m1','Pessimistic Locking':'m1',
  'Dirty Read':'m2','Phantom Read':'m2','Read Skew':'h2','Write Skew':'h2',
  'Data Skew':'m2','Hot Partition':'m2','Rebalancing':'h2','Resharding':'h3',
  'Authentication (Password/SSO/OAuth)':'e1','Authorization / GRANT / REVOKE':'e1',
  'Row-Level Security':'m2','Encryption at Rest':'m1','Encryption in Transit (TLS)':'m1',
  'TDE':'h3','KMS / HSM':'h2','Least Privilege':'e1','Audit Logging':'m2',
  'SQL Injection':'e1','Parameterization':'e1','Secrets Management':'m1',
  'Data Masking / Tokenization':'h3','GDPR / PII compliance':'m2',
  'Consensus (Raft / Paxos)':'h2','Quorum':'h2','Leader / Follower':'m1',
  'Eventual Consistency':'m1','Strong Consistency':'m1','Read/Write Concern':'m2',
  'Idempotency':'m1','Exactly-Once vs At-Least-Once':'h2',
  'Retry / Backoff':'e1','Circuit Breaker':'m1',
  'Read Replicas':'m1','Multi-leader Replication':'h2',
  'Microservices + Database per Service':'m1','CQRS':'h2','Event Sourcing':'h2',
  'HTAP':'h3','Vector Database':'m2','Time-Series DB':'m2',
  'Graph DB (Cypher / Gremlin)':'m3','Geo-spatial':'m3','Full-text Search':'m2',
  'Data Governance':'m2','Metadata Catalog':'h3','Data Lineage':'h3',
  'Geo-replication':'h2','Federation':'h3',
  'OSI Model':'e1','TCP vs UDP':'e1','Three-way Handshake':'e1',
  'Congestion Control':'m2','MTU / MSS':'m3','Ports & Sockets':'e1',
  'HTTP/1.1':'e1','HTTP/2':'m1','HTTP/3 (QUIC)':'m2',
  'Methods & Status Codes':'e1','Headers & Caching':'e1',
  'Content Negotiation':'m3','Keep-Alive / Connection Reuse':'m2',
  'TLS Handshake':'m1','Certificates / CA chain':'m1',
  'ALPN / SNI':'h3','HSTS':'m2','mTLS':'h2',
  'A / AAAA / CNAME':'e1','TTL & Caching':'e1',
  'Recursive vs Authoritative':'m2','DNS over HTTPS / TLS':'m3','Split DNS':'h3',
  'REST':'e1','gRPC':'m1','GraphQL':'m2','Idempotency keys':'m1',
  'Pagination / Filtering':'e1','Rate Limit header':'m2','Versioning':'m1','Webhooks':'e1',
  'WebSocket':'m1','Server-Sent Events':'m2','Long Polling':'e1',
  'Backpressure':'h2','Reconnect strategy':'m2',
  'Load Balancer L4/L7':'m1','Health Check':'e1','Sticky Session':'m2',
  'Blue/Green, Canary':'m1','Reverse Proxy / API Gateway':'m1',
  'Cache-Control / ETag':'m1','Stale-While-Revalidate':'m2',
  'Edge Cache':'m2','Content Invalidation':'m2','Object Storage + CDN':'m2',
  'Distributed Tracing':'m1','Trace/Span Id propagation':'m2',
  'OpenTelemetry':'m1','Retry + Backoff':'e1',
  'SOLID':'e1','KISS / YAGNI':'e1','Domain-Driven Design':'h2','Dependency Injection':'m1',
  'Factory Method':'m1','Abstract Factory':'m2','Builder':'m1',
  'Prototype':'m3','Singleton (cân nhắc)':'e1',
  'Adapter':'m1','Facade':'e1','Decorator':'m1',
  'Composite':'m2','Proxy':'m2','Bridge':'h3',
  'Strategy':'m1','Observer':'m1','Command':'m2','State':'m2',
  'Template Method':'m2','Chain of Responsibility':'m2','Mediator':'m3',
  'Clean / Hexagonal Architecture':'h1','Ports & Adapters':'h2',
  'Repository Pattern':'m1','Unit of Work':'m2','Saga / Workflow Orchestration':'h2',
  'Bulkhead':'m2','Caching Layer':'e1','Message Queue / Event Bus':'m1',
  'Producer / Consumer':'m1','Thread Pool':'m1','Actor Model':'h3',
  'Immutable Data':'m2','Async/Await flow':'e1',
  'AuthN vs AuthZ':'e1','RBAC / ABAC':'m1','OAuth2 / OIDC':'m1',
  'JWT / JTI blacklist':'m1','Session hardening':'m2','MFA / TOTP':'m2',
  'Hashing (bcrypt / argon2)':'m1','Salt / Pepper':'m1',
  'Rate limit login':'e1','Secrets Manager / KMS':'m2',
  'Secret rotation':'m2','No secrets in repo/log':'e1',
  'XSS':'e1','Template Injection':'m2',
  'Input Validation / Encoding':'e1','CSRF':'m1','Clickjacking':'m2',
  'TLS everywhere':'e1','Encryption at Rest / TDE':'m1',
  'Key rotation':'m2','PII masking':'m2',
  'SIEM alerts':'h2','Tamper-evident logs':'h3',
  'Dependency scanning':'m1','SAST / DAST':'m2','Incident response playbook':'m2',
  'GDPR / PII':'m1','Data Retention':'m2','DPIA':'h3',
  'Privacy by Design':'m2','Vendor risk':'m3','Business Continuity':'m2',
  'Horizontal Scaling':'m1','Vertical Scaling':'e1','Load Balancer':'m1',
  'API Gateway':'m1','Reverse Proxy':'m1','Consistent Hashing':'h2',
  'Cache Invalidation':'m1','Cache Stampede':'h2','Pagination':'e1',
  'High Availability (HA)':'m1','Rate Limiting':'m1','Throttling':'m1',
  'Livelock':'m2','False Sharing':'h3',
  'CAP Theorem':'m1','Two-phase Commit (2PC)':'h2','Three-phase Commit (3PC)':'h3',
  'Split-brain':'h2','Exactly-once Semantics':'h2'
};
const _D = { e: 'easy', m: 'medium', h: 'hard' };
const k = (term, note = '') => {
  const raw = kwMeta[term] || 'm2';
  return { term, note, difficulty: _D[raw[0]] || 'medium', priority: parseInt(raw[1]) || 2 };
};

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
          k('MVCC'),
          k('Indexing'),
          k('Clustering'),
          k('LSM Tree'),
          k('Bloom Filter'),
          k('Row-based Storage'),
          k('Compaction'),
          k('Data Locality'),
          k('Time-series Partitioning'),
          k('Logical Replication'),
          k('Physical Replication')
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
          k('Snowflake Schema'),
          k('Data Migration'),
          k('Schema Evolution'),
          k('Schema Registry')
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
          k('Connection Pooling'),
          k('Query Optimization'),
          k('Query Planner'),
          k('Composite Index'),
          k('Covering Index'),
          k('Secondary Indexes')
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
          k('Point-in-Time Recovery'),
          k('Snapshot Isolation'),
          k('Lock Escalation'),
          k('Optimistic Locking'),
          k('Pessimistic Locking'),
          k('Dirty Read'),
          k('Phantom Read'),
          k('Read Skew'),
          k('Write Skew'),
          k('Data Skew'),
          k('Hot Partition'),
          k('Rebalancing'),
          k('Resharding')
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
          k('Circuit Breaker'),
          k('Read Replicas'),
          k('Multi-leader Replication')
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
          k('Data Lineage'),
          k('Geo-replication'),
          k('Federation')
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
          k('Versioning'),
          k('Webhooks')
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
  },
  {
    id: 'system-design',
    title: 'System Design',
    hint: 'Thiết kế hệ thống phân tán, mở rộng & chịu lỗi.',
    groups: [
      {
        title: 'Mở rộng (Scalability)',
        sub: 'Chiến lược tăng khả năng chịu tải.',
        keywords: [
          k('Horizontal Scaling'),
          k('Vertical Scaling'),
          k('Load Balancer'),
          k('API Gateway'),
          k('Reverse Proxy'),
          k('Consistent Hashing'),
          k('Caching'),
          k('Cache Invalidation'),
          k('Cache Stampede'),
          k('Pagination')
        ]
      },
      {
        title: 'Chịu lỗi (Resilience)',
        sub: 'Giữ hệ thống sống khi có sự cố.',
        keywords: [
          k('High Availability (HA)'),
          k('Failover'),
          k('Circuit Breaker'),
          k('Bulkhead'),
          k('Rate Limiting'),
          k('Throttling'),
          k('Backpressure'),
          k('Retry / Backoff'),
          k('Livelock'),
          k('False Sharing')
        ]
      },
      {
        title: 'Nhất quán phân tán (Distributed Consensus)',
        sub: 'Đồng thuận và nhất quán trong hệ phân tán.',
        keywords: [
          k('CAP Theorem'),
          k('ACID'),
          k('BASE'),
          k('Eventual Consistency'),
          k('Strong Consistency'),
          k('Consensus (Raft / Paxos)'),
          k('Quorum'),
          k('Two-phase Commit (2PC)'),
          k('Three-phase Commit (3PC)'),
          k('Split-brain'),
          k('Idempotency'),
          k('Exactly-once Semantics')
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
  'system-design': {
    color: '#0891b2',
    bg: 'rgba(8,145,178,0.08)',
    link: 'study-system-design.html',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 8h2m2 0h2m2 0h2"/><path d="M7 12h10"/></svg>',
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
      <div class="dash-card-top">
        <div class="dash-card-icon">
          ${meta.icon || ''}
        </div>
        <h3>${topic.title}</h3>
        <div class="dash-hint">${topic.hint}</div>
        <div class="dash-meta">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          <span><strong>${done}</strong> / ${total} keywords</span>
          <span class="dash-pct">${pct}%</span>
        </div>
      </div>
      <div class="dash-card-bottom">
        <div class="dash-progress">
          <div class="dash-progress-fill" style="width:${pct}%"></div>
        </div>
        <button class="dash-btn">Bắt đầu học</button>
      </div>
    `;

    grid.appendChild(card);
  });

  content.appendChild(grid);

  const nav = document.getElementById('nav');
  if (nav) nav.style.display = 'none';
}

/* ─── SVG Icons ───────────────────────────────────── */
const chevronSvg  = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6l4 4 4-4"/></svg>';
const copySvg     = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>';
const checkAllSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
const clearSvg    = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
const expandSvg   = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg>';
const collapseSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 11 12 6 17 11"/><polyline points="7 18 12 13 17 18"/></svg>';

/* ─── Render Sections ─────────────────────────────── */
function renderSections() {
  const content = document.getElementById('content');
  if (!content) return;
  content.innerHTML = '';

  activeTopics.forEach(topic => {
    const section = document.createElement('section');
    section.className = 'section';
    section.id = topic.id;
    const topicColor = (topicMeta[topic.id] || {}).color;
    if (topicColor) section.style.setProperty('--section-color', topicColor);

    const done = doneCount(topic.id);
    const total = totalCount(topic.id);
    const pct = total > 0 ? Math.round((done / total) * 100) : 0;

    const ringR = 20, ringC = +(2 * Math.PI * ringR).toFixed(2);
    const ringOffset = +(ringC * (1 - pct / 100)).toFixed(2);

    section.innerHTML = `
      <div class="section-header">
        <div class="section-title-wrap">
          <h2>${topic.title}</h2>
          <div class="hint">${topic.hint}</div>
        </div>
        <div class="section-ring-wrap">
          <svg class="section-ring" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="${ringR}" fill="none" stroke="var(--surface-3)" stroke-width="3.5"/>
            <circle id="ring-${topic.id}" cx="24" cy="24" r="${ringR}" fill="none"
              stroke="var(--section-color, var(--accent))" stroke-width="3.5"
              stroke-linecap="round"
              stroke-dasharray="${ringC}" stroke-dashoffset="${ringOffset}"
              transform="rotate(-90 24 24)"
              style="transition:stroke-dashoffset .4s ease"/>
          </svg>
          <div class="ring-text">
            <span class="ring-done" id="badge-${topic.id}">${done}</span>
            <span class="ring-total">/${total}</span>
          </div>
        </div>
      </div>
      <div class="section-toolbar">
        <div class="filter-wrap"><input type="text" class="filter-input" placeholder="Tìm keyword…" /></div>
        <div class="filter-pills">
          <button class="fpill active" data-diff="all">Tất cả</button>
          <button class="fpill" data-diff="easy">Easy</button>
          <button class="fpill" data-diff="medium">Medium</button>
          <button class="fpill" data-diff="hard">Hard</button>
        </div>
        <select class="sort-select">
          <option value="default">Mặc định</option>
          <option value="diff-asc">Dễ → Khó</option>
          <option value="diff-desc">Khó → Dễ</option>
          <option value="pri-asc">Ưu tiên cao trước</option>
          <option value="pri-desc">Ưu tiên thấp trước</option>
          <option value="name-asc">A → Z</option>
          <option value="name-desc">Z → A</option>
        </select>
        <div class="toolbar-actions">
          <button class="tool-btn" data-action="copy-topic" title="Copy tất cả">${copySvg}</button>
          <button class="tool-btn green" data-action="mark-topic" title="Tick hết">${checkAllSvg}</button>
          <button class="tool-btn" data-action="clear-topic" title="Bỏ hết">${clearSvg}</button>
          <button class="tool-btn" data-action="expand-all" title="Mở hết">${expandSvg}</button>
          <button class="tool-btn" data-action="collapse-all" title="Thu hết">${collapseSvg}</button>
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
            <div class="group-num">${String(gi + 1).padStart(2, '0')}</div>
            <div>
              <h3>${group.title}</h3>
              <div class="sub">${group.sub || ''}</div>
            </div>
          </div>
          <div class="group-head-right">
            <button class="tool-btn" data-act="copy" title="Copy nhóm">${copySvg}</button>
            <button class="tool-btn green" data-act="mark" title="Tick hết">${checkAllSvg}</button>
            <button class="tool-btn" data-act="clear" title="Bỏ hết">${clearSvg}</button>
            <span class="group-badge"><strong id="badge-${topic.id}-${gi}">${gDone}</strong>/${gTotal}</span>
          </div>
        </div>
        <div class="group-body">
          <div class="list"></div>
        </div>
      `;

      const head = card.querySelector('.group-head');
      head.addEventListener('click', (e) => {
        if (e.target.closest('.tool-btn')) return;
        const isNowCollapsed = !card.classList.contains('collapsed');
        card.classList.toggle('collapsed', isNowCollapsed);
        setCollapsed(topic.id, gi, isNowCollapsed);
      });

      const list = card.querySelector('.list');
      group.keywords.forEach((kw, ki) => {
        const item = document.createElement('div');
        item.className = 'item';
        item.dataset.difficulty = kw.difficulty;
        item.dataset.priority = kw.priority;
        item.dataset.term = kw.term.toLowerCase();
        item.dataset.origIndex = ki;
        const checkboxId = `${topic.id}-${gi}-${ki}`;
        item.innerHTML = `
          <div class="item-left">
            <input type="checkbox" id="${checkboxId}" ${state[topic.id][gi][ki] ? 'checked' : ''} />
            <div>
              <label for="${checkboxId}">${kw.term}</label>
              ${kw.note ? `<div class="desc">${kw.note}</div>` : ''}
            </div>
          </div>
          <div class="item-tags">
            <span class="diff-tag ${kw.difficulty}">${kw.difficulty}</span>
            ${kw.priority === 1 ? '<span class="pri-tag p1">Ưu tiên</span>' : kw.priority === 3 ? '<span class="pri-tag p3">Tham khảo</span>' : ''}
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

        item.addEventListener('click', (e) => {
          if (e.target.closest('input[type="checkbox"]')) return;
          if (e.target.closest('label')) return;
          if (e.target.closest('[data-copy]')) return;
          checkbox.click();
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

    const filterInput = section.querySelector('.filter-input');
    const sortSelect = section.querySelector('.sort-select');
    const fpills = section.querySelectorAll('.fpill');
    filterInput?.addEventListener('input', () => applyFilters(section));
    sortSelect?.addEventListener('change', () => applyFilters(section));
    fpills.forEach(pill => {
      pill.addEventListener('click', () => {
        fpills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        applyFilters(section);
      });
    });

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

/* ─── Filter & Sort ───────────────────────────────── */
const DIFF_ORDER = { easy: 1, medium: 2, hard: 3 };

function applyFilters(section) {
  const searchTerm = (section.querySelector('.filter-input')?.value || '').toLowerCase();
  const activeDiff = section.querySelector('.fpill.active')?.dataset.diff || 'all';
  const sortValue = section.querySelector('.sort-select')?.value || 'default';

  section.querySelectorAll('.group-card').forEach(card => {
    const list = card.querySelector('.list');
    const items = Array.from(list.querySelectorAll('.item'));
    let visible = 0;

    items.forEach(item => {
      const matchName = !searchTerm || item.dataset.term.includes(searchTerm);
      const matchDiff = activeDiff === 'all' || item.dataset.difficulty === activeDiff;
      const show = matchName && matchDiff;
      item.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    card.style.display = visible > 0 ? '' : 'none';

    const sorted = [...items].sort((a, b) => {
      if (sortValue === 'default') return Number(a.dataset.origIndex) - Number(b.dataset.origIndex);
      if (sortValue === 'diff-asc') return DIFF_ORDER[a.dataset.difficulty] - DIFF_ORDER[b.dataset.difficulty];
      if (sortValue === 'diff-desc') return DIFF_ORDER[b.dataset.difficulty] - DIFF_ORDER[a.dataset.difficulty];
      if (sortValue === 'pri-asc') return Number(a.dataset.priority) - Number(b.dataset.priority);
      if (sortValue === 'pri-desc') return Number(b.dataset.priority) - Number(a.dataset.priority);
      if (sortValue === 'name-asc') return a.dataset.term.localeCompare(b.dataset.term);
      if (sortValue === 'name-desc') return b.dataset.term.localeCompare(a.dataset.term);
      return 0;
    });
    sorted.forEach(item => list.appendChild(item));
  });
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

  const ring = document.getElementById(`ring-${topicId}`);
  if (ring && topic) {
    const r = 20, circ = 2 * Math.PI * r;
    const t = totalCount(topicId), d = doneCount(topicId);
    ring.setAttribute('stroke-dashoffset', (circ * (1 - d / (t || 1))).toFixed(2));
  }

  // dashboard progress bar (pbar only exists in dashboard view)
  const pbar = document.getElementById(`pbar-${topicId}`);
  if (pbar && topic) {
    const total = totalCount(topicId), done = doneCount(topicId);
    pbar.style.width = (total > 0 ? Math.round((done / total) * 100) : 0) + '%';
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
