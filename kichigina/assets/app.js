document.addEventListener('DOMContentLoaded', () => {
  const cfg = window.SITE_CONFIG;
  if (!cfg) return;
  const put = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
  put('pointName', cfg.pointName);
  put('pointNameTop', cfg.pointName);
  put('pointAddress', cfg.address);
  put('pointAddressTop', cfg.address);
  put('hours', cfg.hours || 'УКАЖИТЕ РЕЖИМ РАБОТЫ ПЕРЕД ПУБЛИКАЦИЕЙ');
  put('checkedDate', cfg.checkedDate);
  const map = document.getElementById('mapLink'); if(map) map.href = cfg.mapUrl;
  const map2 = document.getElementById('mapLink2'); if(map2) map2.href = cfg.mapUrl;
  document.title = `${cfg.brand} — Информация для потребителей • ${cfg.pointName}`;
});
