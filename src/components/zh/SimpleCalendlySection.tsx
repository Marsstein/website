import React from 'react';

export const SimpleCalendlySection: React.FC = () => {
  return (
    <div style={{
      backgroundColor: '#fff3e0',
      border: '2px solid #e24e1b',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '24px'
    }}>
      <h3 style={{
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        📅 免费初步咨询
      </h3>

      <p style={{
        color: '#666',
        marginBottom: '16px'
      }}>
        与我们的合规专家安排一次无约束力的咨询。
      </p>

      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: '0 0 20px 0'
      }}>
        <li style={{ marginBottom: '8px', color: '#555' }}>
          ✅ 30分钟专家对话
        </li>
        <li style={{ marginBottom: '8px', color: '#555' }}>
          ✅ 个性化解决方案建议
        </li>
        <li style={{ marginBottom: '8px', color: '#555' }}>
          ✅ 无约束力且免费
        </li>
      </ul>

      <div style={{ textAlign: 'center' }}>
        <a
          href="https://calendly.com/marsstein-info/marsstein-intro"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: '#e24e1b',
            color: 'white',
            padding: '12px 32px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#c73e0f';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#e24e1b';
          }}
        >
          预约
        </a>
      </div>
    </div>
  );
};
