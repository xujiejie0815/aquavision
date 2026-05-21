(function(){
  var TYPES_JA = ["プロジェクト相談","出展・コラボレーション","メディア・取材","投資家・パートナー","採用にエントリー","その他"];
  var TYPES_EN = ["Project inquiry","Exhibition / Collaboration","Press / Media","Investors / Partners","Recruitment Entry","Other"];

  function lang(){ return localStorage.getItem('aq_lang') || 'ja'; }

  function buildModal(preType){
    var l = lang();
    var types = l === 'ja' ? TYPES_JA : TYPES_EN;
    var sel = preType || types[0];
    var typeButtons = types.map(function(tp){
      return '<button type="button" class="cf-type'+(tp===sel?' active':'')+'" data-type="'+tp+'">'+tp+'</button>';
    }).join('');
    var div = document.createElement('div');
    div.className = 'contact-modal';
    div.id = 'aq-popup';
    div.setAttribute('role','dialog');
    div.setAttribute('aria-modal','true');
    div.innerHTML =
      '<div class="contact-modal-card" id="aq-popup-card">'+
        '<button type="button" class="member-modal-close" id="aq-popup-close" aria-label="Close">'+
          '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.4">'+
            '<line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/>'+
          '</svg>'+
        '</button>'+
        '<div class="contact-modal-head">'+
          '<div class="contact-modal-eyebrow">'+(l==='ja'?'お問い合わせ':'Contact us')+'</div>'+
          '<h3 class="contact-modal-title">Contact</h3>'+
          '<p class="contact-modal-intro" style="white-space:pre-line">'+(l==='ja'?'ご相談・お見積もり・取材・出展のご依頼など、\n下記フォームよりお気軽にご連絡ください。3営業日以内に担当よりご返信します。':'Reach out for project inquiries, quotes, press, or exhibition requests. We\'ll respond within 3 business days.')+'</p>'+
        '</div>'+
        '<form class="contact-form" id="aq-popup-form" novalidate>'+
          '<div class="cf-row">'+
            '<label class="cf-label">'+(l==='ja'?'ご用件':'Inquiry type')+'</label>'+
            '<div class="cf-types">'+typeButtons+'</div>'+
          '</div>'+
          '<div class="cf-grid">'+
            '<div class="cf-row"><label class="cf-label">'+(l==='ja'?'お名前':'Name')+' *</label><input required type="text" class="cf-input" id="aq-name"/></div>'+
            '<div class="cf-row"><label class="cf-label">'+(l==='ja'?'会社・組織名':'Company')+'</label><input type="text" class="cf-input" id="aq-company"/></div>'+
          '</div>'+
          '<div class="cf-row"><label class="cf-label">'+(l==='ja'?'メールアドレス':'Email')+' *</label><input required type="email" class="cf-input" id="aq-email"/></div>'+
          '<div class="cf-row">'+
            '<label class="cf-label">'+(l==='ja'?'ご相談内容':'Message')+' *</label>'+
            '<textarea required class="cf-textarea" rows="5" placeholder="'+(l==='ja'?'プロジェクトの概要・規模・時期など、わかる範囲でご記入ください。':'Project outline, scope, and timing where possible.')+'" id="aq-message"></textarea>'+
          '</div>'+
          '<p class="cf-privacy">'+(l==='ja'?'送信いただいた内容は弊社プライバシーポリシーに基づいて取り扱います。':'We handle the information you submit in accordance with our Privacy Policy.')+'</p>'+
          '<button type="submit" class="cta-pill primary cf-submit">'+
            (l==='ja'?'送信する':'Send')+
            '<svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="0" y1="5" x2="12" y2="5"/><polyline points="9,1 13,5 9,9"/></svg>'+
          '</button>'+
        '</form>'+
      '</div>';
    return div;
  }

  function close(){
    var m = document.getElementById('aq-popup');
    if(m) m.remove();
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKey);
  }

  function onKey(e){ if(e.key==='Escape') close(); }

  function showSuccess(){
    var l = lang();
    var card = document.getElementById('aq-popup-card');
    if(!card) return;
    card.innerHTML =
      '<button type="button" class="member-modal-close" onclick="(function(){var m=document.getElementById(\'aq-popup\');if(m)m.remove();document.body.style.overflow=\'\';})()" aria-label="Close">'+
        '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.4"><line x1="5" y1="5" x2="19" y2="19"/><line x1="19" y1="5" x2="5" y2="19"/></svg>'+
      '</button>'+
      '<div class="contact-modal-sent">'+
        '<div class="contact-sent-icon"><svg viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="var(--aqua)" stroke-width="1.5"><circle cx="32" cy="32" r="28"/><polyline points="20,33 28,42 46,22"/></svg></div>'+
        '<h3 class="contact-modal-title" style="margin-top:20px">'+(l==='ja'?'送信ありがとうございました。':'Message sent. Thank you.')+'</h3>'+
        '<p class="contact-modal-intro">'+(l==='ja'?'3営業日以内に担当よりご連絡いたします。':"We'll be in touch within 3 business days.")+'</p>'+
        '<button type="button" class="cta-pill" onclick="(function(){var m=document.getElementById(\'aq-popup\');if(m)m.remove();document.body.style.overflow=\'\';})()" style="margin-top:24px">'+(l==='ja'?'閉じる':'Close')+'</button>'+
      '</div>';
  }

  window.openContactPopup = function(preType){
    var existing = document.getElementById('aq-popup');
    if(existing) existing.remove();
    var modal = buildModal(preType || '');
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    modal.addEventListener('click', function(e){ if(e.target===modal) close(); });
    document.getElementById('aq-popup-close').addEventListener('click', close);
    document.addEventListener('keydown', onKey);
    modal.querySelectorAll('.cf-type').forEach(function(btn){
      btn.addEventListener('click', function(){
        modal.querySelectorAll('.cf-type').forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
      });
    });
    var form = document.getElementById('aq-popup-form');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      if(!document.getElementById('aq-name').value.trim()) return;
      if(!document.getElementById('aq-email').value.trim()) return;
      if(!document.getElementById('aq-message').value.trim()) return;
      showSuccess();
    });
  };
})();
