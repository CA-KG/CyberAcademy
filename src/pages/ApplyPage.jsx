import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../i18n/client"


const ApplyPage =()=>{

    const {t} = useTranslation();
    const courses = t("applyPage.courses", { returnObjects: true });

      useEffect(() => {
        const handleSubmit = async (e) => {
          e.preventDefault();
          
          const form = e.target;
          const submitBtn = form.querySelector('button[type="submit"]');
          const originalBtnText = submitBtn.textContent;
          
          try {
            submitBtn.textContent = 'Отправка...';
            submitBtn.disabled = true;
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            const botToken = '7239512144:AAG-9ngqMBWc0tMGW-3Mq8RD8EJriHB9Ru0';
            const chatId = '5117600343';
            
            const message = 
              `📝 *Новая заявка:*
              👤 *ФИО:* ${data.fullname}
              📞 *Телефон:* ${data.phone}
              ✉️ *Email:* ${data.email || 'не указан'}
              🕛 *Удобное время:* ${data.time || 'не указан'}
              🎓 *Курс:* ${data.course}
              ❓ *Вопрос:* ${data.question || 'нет вопроса'}`;
    
            const response = await fetch(
              `https://api.telegram.org/bot${botToken}/sendMessage`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  chat_id: chatId,
                  text: message,
                  parse_mode: 'Markdown'
                })
              }
            );
            
            if (response.ok) {
              toast.success(t('applyPage.succes'));
              form.reset();
            } else {
              throw new Error('Ошибка при отправке');
            }
          } catch (error) {
            toast.error(t('applyPage.error'));
          } finally {
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
          }
        };
    
        const form = document.getElementById('application-form');
        if (form) {
          form.addEventListener('submit', handleSubmit);
        }
    
        return () => {
          if (form) {
            form.removeEventListener('submit', handleSubmit);
          }
        };
      }, []);
      return (
        <main className="apply-page">
          <section className="form-section">
            <h1>{t("applyPage.title")}</h1>
            <p>{t("applyPage.subtitle")}</p>
            
            <form id="application-form" className="application-form">
              <div className="form-group">
                <label htmlFor="fullname">{t("applyPage.fullname")}</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  required
                  placeholder={t("applyPage.fullnamePlaceholder")}
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="phone">{t("applyPage.phone")}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder={t("applyPage.phonePlaceholder")}
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="email">{t("applyPage.email")}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t("applyPage.emailPlaceholder")}
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="time">{t("applyPage.callTime")}</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  required
                  placeholder={t("applyPage.timePlaceholder")}
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="course">{t("applyPage.course")}</label>
                <select id="course" name="course" required>
                  <option value="" disabled selected>{t("applyPage.selectCourse")}</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>{course}</option>
                  ))}
                </select>
              </div>
    
              <div className="form-group">
                <label htmlFor="question">{t("applyPage.question")}</label>
                <textarea
                  id="question"
                  name="question"
                  rows="4"
                  placeholder={t("applyPage.questionPlaceholder")}
                ></textarea>
              </div>
    
              <button type="submit" className="submit-btn">{t("applyPage.submit")}</button>
            </form>
          </section>
    <style jsx>{`
     .apply-page {
    padding: 4rem 0;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .form-section {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .form-section h1 {
    font-size: 2.5rem;
    color: #043570;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .form-section p {
    font-size: 1.2rem;
    color: #64748b;
    margin-bottom: 3rem;
    text-align: center;
  }
  
  .application-form {
    display: grid;
    gap: 1.5rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .form-group label {
    font-weight: 600;
    color: #334155;
  }
  
  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 0.8rem 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.3s;
  }
  
  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #043570;
  }
  
  .submit-btn {
    background: #043570;
    color: white;
    padding: 1rem;
    border: none;
    border-radius: 6px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s;
    margin-top: 1rem;
  }
  
  .submit-btn:hover {
    background: #0066ff;
  }
  
  @media (max-width: 768px) {
    .form-section {
      padding: 0 1rem;
    }
    
    .form-section h1 {
      font-size: 2rem;
    }
  }`
}</style>
<ToastContainer 
        position="top-right"
        autoClose={5000}
        pauseOnHover
        closeOnClick
        draggable
      />
  </main>
    );
}
export default ApplyPage;