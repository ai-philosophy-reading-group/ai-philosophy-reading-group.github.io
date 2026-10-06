'use strict';
(() => {
  const data = window.GROUP;
  const $ = id => document.getElementById(id);
  const el = (tag, cls, text) => { const n = document.createElement(tag); if(cls) n.className=cls; if(text) n.textContent=text; return n; };
  const link = (title,url,cls) => {const a=el('a',cls,title); if (/^(https?:\/\/|mailto:)/.test(url)) a.href=url; return a;};
  const time = value => {const [h,m]=value.split(':').map(Number);return `${h%12||12}:${String(m).padStart(2,'0')} ${h<12?'AM':'PM'}`;};
  const range = m => !m.end ? `${time(m.start)}–TBD` : time(m.start).endsWith(time(m.end).slice(-2)) ? `${time(m.start).slice(0,-3)}–${time(m.end)}` : `${time(m.start)}–${time(m.end)}`;
  const today = new Intl.DateTimeFormat('en-CA',{timeZone:'America/New_York',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
  function render(id) {
    const semester = data.semesters.find(s=>s.id===id) || data.semesters.find(s=>s.id===data.currentSemester) || data.semesters[0];
    $('semester-label').textContent=semester.label + (semester.id!==data.currentSemester?' · Archive':'');
    $('theme').textContent=semester.theme;
    document.querySelectorAll('.semester-caption').forEach(n=>n.textContent=semester.label);
    $('schedule-note').textContent=semester.scheduleNote || '';
    $('meetings').replaceChildren();
    const meetings=[...semester.meetings].sort((a,b)=>a.date.localeCompare(b.date));
    const next=semester.id===data.currentSemester ? meetings.find(m=>m.date>=today) : null;
    for(const m of meetings){
      const card=el('article','meeting');
      const statuses=[];if(m.first)statuses.push('First meeting');if(m===next)statuses.push(m.date===today?'Today':'Upcoming');
      if(statuses.length)card.append(el('p','meeting-status',statuses.join(' · ')));
      const date=el('time','meeting-date',new Intl.DateTimeFormat('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric',timeZone:'UTC'}).format(new Date(m.date+'T12:00:00Z')));date.dateTime=m.date;
      card.append(date,el('p','meeting-time',range(m)+' ET'),el('h3','',m.topic));
      if(m.leader) card.append(el('p','meeting-meta','Discussion leader: '+m.leader));
      if(m.location)card.append(el('p','meeting-meta',m.location));
      if(m.meetingUrl){const p=el('p','meeting-meta');p.append(link('Join the meeting',m.meetingUrl));card.append(p);}
      if(m.description)card.append(el('p','meeting-description',m.description));
      const ul=el('ul');for(const r of m.readings){const li=el('li');if(r.author)li.append(document.createTextNode(r.author+', '));li.append(link(r.title,r.url));ul.append(li);}card.append(ul);
      if(m.notes)card.append(el('p','meeting-notes',m.notes));$('meetings').append(card);
    }
    if(!meetings.length)$('meetings').append(el('p','muted','Meeting dates will be announced here.'));
    $('reading-groups').replaceChildren();
    for(const g of semester.readingGroups){const row=el('div','reading-group');row.append(el('h3','',g.topic));const ul=el('ul','paper-list');for(const p of g.papers){const li=el('li');li.append(link(p.title,p.url,'paper-title'));for(const r of p.related||[]){const related=el('span','related');related.append(link(r.title,r.url));li.append(related);}ul.append(li);}row.append(ul);$('reading-groups').append(row);}
    $('semester-select').value=semester.id;
  }
  for(const s of data.semesters){const o=el('option','',s.label+(s.id!==data.currentSemester?' (archive)':''));o.value=s.id;$('semester-select').append(o);}
  $('semester-picker').hidden=data.semesters.length<2;
  $('semester-select').addEventListener('change',e=>{render(e.target.value);const u=new URL(location.href);u.searchParams.set('semester',e.target.value);history.replaceState(null,'',u);});
  render(new URLSearchParams(location.search).get('semester')||data.currentSemester);
  if(data.organizers.length){$('organizers').replaceChildren();for(const o of data.organizers){const div=el('div','organizer');div.append(el('strong','',o.name));if(o.affiliation)div.append(el('p','muted',o.affiliation));if(o.email){const p=el('p');p.append(link(o.email,'mailto:'+o.email));div.append(p);}$('organizers').append(div);}}
  // giscus loads only after real repository and category IDs are supplied.
  const d=data.discussion;
  if(d.repo){$('discussion-link').hidden=false;$('discussion-link').append(link('Open the discussion forum','https://github.com/'+d.repo+'/discussions'));$('discussion-placeholder').hidden=true;}
  if(d.repo&&d.repoId&&d.category&&d.categoryId){const script=document.createElement('script');script.src='https://giscus.app/client.js';const attrs={'repo':d.repo,'repo-id':d.repoId,'category':d.category,'category-id':d.categoryId,'mapping':'specific','term':'reading-group-general','strict':'1','reactions-enabled':'1','emit-metadata':'0','input-position':'top','theme':'light','lang':'en','loading':'lazy'};for(const [k,v] of Object.entries(attrs))script.setAttribute('data-'+k,v);script.crossOrigin='anonymous';script.async=true;$('giscus').append(script);}
})();
