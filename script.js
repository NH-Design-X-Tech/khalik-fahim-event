document.getElementById('year').textContent = new Date().getFullYear();

// Load the live Typeform configuration only near the form or on registration intent.
const formWrapper = document.querySelector('.form-wrapper');
const formPlaceholder = document.querySelector('.form-placeholder');
const formStatus = document.querySelector('.form-status');
let formStarted = false;
let formObserver;

function loadRegistration() {
  if (formStarted) return;
  formStarted = true;
  formObserver?.disconnect();
  formStatus.textContent = 'جارٍ تحميل نموذج التسجيل…';

  let frameObserver;
  const showFallback = () => {
    if (!formWrapper.querySelector('iframe')) {
      formStatus.textContent = 'تعذّر تحميل النموذج. افتحه من رابط التسجيل أدناه.';
    }
  };
  const timeout = window.setTimeout(showFallback, 15000);
  const markReady = () => {
    const frame = formWrapper.querySelector('iframe');
    if (!frame) return;
    frame.title = 'نموذج التسجيل في حدث أحمد القحطاني';
    formPlaceholder.hidden = true;
    window.clearTimeout(timeout);
    frameObserver.disconnect();
  };
  frameObserver = new MutationObserver(markReady);
  frameObserver.observe(formWrapper, { childList: true, subtree: true });

  const embed = document.createElement('script');
  embed.src = 'https://embed.typeform.com/next/embed.js';
  embed.async = true;
  embed.addEventListener('error', () => {
    window.clearTimeout(timeout);
    frameObserver.disconnect();
    showFallback();
  }, { once: true });
  document.head.append(embed);
}

if ('IntersectionObserver' in window) {
  formObserver = new IntersectionObserver(entries => {
    if (entries.some(entry => entry.isIntersecting)) loadRegistration();
  }, { rootMargin: '200px 0px' });
  formObserver.observe(formWrapper);
} else {
  loadRegistration();
}
document.querySelectorAll('a[href="#register"]').forEach(link => {
  link.addEventListener('click', loadRegistration);
});

// Keep the mobile action clear of the registration form while it is in view.
const mobileCta = document.querySelector('.mobile-cta');
if (mobileCta && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => {
    mobileCta.hidden = entry.isIntersecting;
  }).observe(document.getElementById('register'));
}

// Preserve the live site's existing TikTok page-view integration.
!function(w,d,t){
  w.TiktokAnalyticsObject=t;
  var ttq=w[t]=w[t]||[];
  ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
  ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
  for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
  ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
  ttq.load=function(e,n){
    var r="https://analytics.tiktok.com/i18n/pixel/events.js";
    ttq._i=ttq._i||{};ttq._i[e]=[];ttq._i[e]._u=r;
    ttq._t=ttq._t||{};ttq._t[e]=+new Date;
    ttq._o=ttq._o||{};ttq._o[e]=n||{};
    var s=d.createElement("script");s.type="text/javascript";s.async=true;
    s.src=r+"?sdkid="+e+"&lib="+t;
    var insert=function(){d.head.appendChild(s)};
    if('requestIdleCallback' in w){w.requestIdleCallback(insert,{timeout:1500})}
    else{w.setTimeout(insert,0)};
  };
  ttq.load("D9L4Q53C77U3RB5B3NTG");ttq.page();
}(window,document,"ttq");
