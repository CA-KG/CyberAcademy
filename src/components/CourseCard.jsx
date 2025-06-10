import React from 'react';

const CourseCard = ({
  title,
  startDate,
  duration,
  format,
  price,
  badge,
  image,
  children
}) => {

  return (
    <div className="course-card">
      {image && (
        <div className="course-image">
          <img src={image} alt={title} loading="lazy" />
          {badge && <div className="course-badge">{badge}</div>}
        </div>
      )}

      <div className="course-body">
        <div className="course-header">
          <h2>{title}</h2>
          <div className="meta-line">
            <span className="meta-item">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 16H5V10h14v10m0-12H5V6h14v2M9 14H7v-2h2v2m4 0h-2v-2h2v2m4 0h-2v-2h2v2m-8 4H7v-2h2v2m4 0h-2v-2h2v2m4 0h-2v-2h2v2Z"/>
              </svg>
              {startDate}
            </span>
            <span className="meta-item">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m5 9.5V13h-6V7h1.5v4.5H17Z"/>
              </svg>
              {duration}
            </span>
          </div>
        </div>

        <div className="course-content">{children}</div>

        <div className="course-footer">
          <div className="format-price">
            <div className="format">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 1c5 0 9 4 9 9s-4 9-9 9s-9-4-9-9s4-9 9-9m.5 3v5.2l3.9 2.4l-.8 1.2L11 13V6h1.5Z"/>
              </svg>
              {format}
            </div>
            <div className="price">{price}</div>
          </div>
          <a href="/apply" className="enroll-btn"> Записаться
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4Z"/>
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .course-card {
          display: flex;
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          margin-bottom: 40px;
          border: 1px solid #e2e8f0;
          min-height: 320px;
        }

        .course-image {
          flex: 0 0 40%;
          position: relative;
          overflow: hidden;
        }

        .course-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .course-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #ef4444;
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
          z-index: 2;
        }

        .course-body {
          flex: 1;
          padding: 30px;
          display: flex;
          flex-direction: column;
        }

        .course-header {
          margin-bottom: 20px;
        }

        .course-header h2 {
          color: #475569;
          font-size: 1.8rem;
          margin: 0 0 15px 0;
        }

        .meta-line {
          display: flex;
          gap: 25px;
          color: #64748b;
          margin-bottom: 10px;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
        }

        .course-content {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #475569;
          flex-grow: 1;
        }

        .course-footer {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-top: 30px;
        }

        .format-price {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .format {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #64748b;
          font-size: 0.95rem;
        }

        .price {
          font-size: 1.8rem;
          font-weight: bold;
          color: #043570;
        }

        .enroll-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #043570;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          font-size: 1.1rem;
          transition: all 0.3s;
        }

        .enroll-btn:hover {
          background: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        @media (max-width: 768px) {
          .course-card {
            flex-direction: column;
            height: 100%;
          }

          .course-image {
            flex: 0 0 200px;
          }

          .course-body {
            padding: 20px;
          }

          .course-header h2 {
            font-size: 1.5rem;
          }

          .meta-line {
            flex-direction: column;
            gap: 10px;
          }

          .course-footer {
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
          }

          .enroll-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default CourseCard;
