const config = {
  siteUrl: 'https://webs-whill.com',
  keyword: '威廉希尔',
  cardList: [
    { title: '欢迎访问', desc: '本页面提供相关提示与帮助信息，请勿用于非法用途。' },
    { title: '安全提示', desc: '请注意保护个人隐私与账户安全，谨防钓鱼与诈骗。' },
    { title: '使用说明', desc: '页面中关键词徽章用于突出核心内容，点击可查看详情。' }
  ],
  badges: [
    { label: '核心关键词', value: '威廉希尔' },
    { label: '来源', value: 'webs-whill.com' },
    { label: '类型', value: '信息提示' }
  ]
};

function createCard(title, description) {
  const card = document.createElement('div');
  card.className = 'tip-card';
  card.innerHTML = `<div class="card-title">${escapeHtml(title)}</div><div class="card-desc">${escapeHtml(description)}</div>`;
  return card;
}

function createBadge(label, value) {
  const badge = document.createElement('span');
  badge.className = 'keyword-badge';
  badge.textContent = `${escapeHtml(label)}: ${escapeHtml(value)}`;
  return badge;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
}

function initSiteHelper() {
  const container = document.getElementById('site-helper-root');
  if (!container) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'helper-wrapper';

  const heading = document.createElement('h3');
  heading.textContent = `提示卡片 · ${config.keyword}`;
  wrapper.appendChild(heading);

  const cardSection = document.createElement('div');
  cardSection.className = 'card-section';
  config.cardList.forEach(item => {
    const card = createCard(item.title, item.desc);
    cardSection.appendChild(card);
  });
  wrapper.appendChild(cardSection);

  const badgeSection = document.createElement('div');
  badgeSection.className = 'badge-section';
  const badgeLabel = document.createElement('p');
  badgeLabel.textContent = '关键词徽章：';
  badgeSection.appendChild(badgeLabel);
  config.badges.forEach(item => {
    const badge = createBadge(item.label, item.value);
    badgeSection.appendChild(badge);
  });
  wrapper.appendChild(badgeSection);

  const accessInfo = document.createElement('div');
  accessInfo.className = 'access-info';
  accessInfo.innerHTML = `<p>访问链接：<a href="${escapeHtml(config.siteUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(config.siteUrl)}</a></p><p>使用说明：请遵循平台规则，内容仅供学习参考。</p>`;
  wrapper.appendChild(accessInfo);

  container.appendChild(wrapper);
}

document.addEventListener('DOMContentLoaded', initSiteHelper);