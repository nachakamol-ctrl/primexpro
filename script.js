const menu=document.querySelector('.menu');const nav=document.querySelector('.topbar nav');menu.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('.topbar nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const projectForm=document.getElementById('projectForm');
if(projectForm){
  projectForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const d=new FormData(projectForm);
    const msg=`สวัสดี PRIMEX PRO

ฉันต้องการให้ช่วยวิเคราะห์โปรเจกต์

ชื่อ/ธุรกิจ: ${d.get('name')}
ธุรกิจ/สินค้า: ${d.get('business')}
บริการที่สนใจ: ${d.get('service')}
งบประมาณ: ${d.get('budget')}
เป้าหมาย 3–6 เดือน: ${d.get('goal') || '-'}

ต้องการรับ Initial Project Review และคำแนะนำจุดเริ่มต้น`;
    const box=document.createElement('div');
    box.className='form-success';
    box.innerHTML=`<h3>PROJECT BRIEF พร้อมแล้ว</h3><p>คัดลอกข้อความด้านล่าง แล้วส่งให้ PRIMEX PRO ทาง LINE พร้อมภาพสินค้า เพจ หรือเว็บไซต์เดิมได้เลย</p><textarea readonly></textarea><div class="hero-actions"><button type="button" class="btn secondary copy-brief">คัดลอก Brief</button><a class="btn primary" href="https://lin.ee/Rid7K2g" target="_blank" rel="noopener">ส่งผ่าน LINE →</a></div>`;
    box.querySelector('textarea').value=msg;
    projectForm.replaceWith(box);
    box.querySelector('.copy-brief').addEventListener('click',async()=>{
      await navigator.clipboard.writeText(msg);
      box.querySelector('.copy-brief').textContent='คัดลอกแล้ว ✓';
    });
  });
}
