import React from 'react';
import { Row, Col } from 'react-bootstrap';

const HeatmapCell = ({ intensity }) => {
  const colors = ['#F5EEF8', '#EBDEF0', '#D7BDE2', '#C39BD3', '#AF7AC5'];
  const color = colors[intensity];

  return (
    <div
      style={{
        width: '25px',
        height: '20px',
        backgroundColor: color,
        marginRight: '1px',
        marginBottom: '1px',
        border: '1px solid #333',
        boxSizing: 'border-box',
        borderRadius: '4px',
      }}
    />
  );
};

const Heatmap = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Replace this with your actual data
  const dummyData = [
    3, 1, 3, 2, 0, 1, 2, 3, 1, 2, 0, 3, 2, 4, 2, 0, 0, 4, 1, 2,
    0, 1, 3, 2, 3, 4, 4, 3, 1, 0, 0, 0, 2, 1, 3, 4, 2, 3, 4, 1,
    0, 0, 3, 2, 1, 2, 4, 3, 1, 0, 3, 4, 2, 2, 4, 4, 3, 1, 0, 1,
    3, 2, 1, 0, 3, 4, 4, 2, 1, 3, 3, 2, 2, 4, 1, 0, 3, 1, 2, 0,
    3, 1, 3, 2, 0, 1, 4, 3, 1, 2, 0, 3, 2, 4, 2, 0, 0, 4, 1, 2,
    4, 1, 3, 2, 3, 4, 4, 3, 1, 0, 0, 0, 2, 1, 3, 4, 2, 3, 4, 1,
    0, 0, 3, 2, 1, 2, 4, 3, 1, 0, 3, 4, 2, 2, 4, 4, 3, 1, 0, 1,
    3, 2, 1, 0, 3, 4, 4, 2, 1, 3, 3, 2, 2, 4, 1, 0, 3, 1, 2, 0,
    3, 2, 1, 0, 3, 4, 4, 2, 1, 3, 3, 2, 2, 4, 1, 0, 3, 1, 2, 0,
    3, 1, 3, 2, 0, 1, 4, 3, 1, 2, 0, 3, 2, 4, 2, 0, 0, 4, 1, 2,
    4, 1, 3, 2, 3, 4, 4, 3, 1, 0, 0, 0, 2, 1, 3, 4, 2, 3, 4, 1,
    0, 0, 3, 2, 1, 2, 4, 3, 1, 0, 3, 4, 2, 2, 4, 4, 3, 1, 0, 1,
    3, 1, 3, 2, 0, 1, 4, 3, 1, 2, 0, 3, 2, 4, 2, 0, 0, 4, 1,
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {[...Array(53)].map((_, weekIndex) => (
          <div key={weekIndex} style={{ display: 'flex', flexDirection: 'column' }}>
            {dummyData.slice(weekIndex * 7, (weekIndex + 1) * 7).map((intensity, dayIndex) => (
              <HeatmapCell key={`${weekIndex}-${dayIndex}`} intensity={intensity} />
            ))}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        {months.map((month) => (
          <span key={month} style={{ marginRight: '16px' }}>
            {month}
          </span>
        ))}
      </div>
    </div>
  );
};

function Github() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      <Col xs={12} md={8}>
        <h1 className="project-heading" style={{ paddingBottom: '20px', textAlign: 'center' }}>
          Days I <strong className="purple">Work</strong>
        </h1>
        <Heatmap />
        <div style={{ textAlign: 'center', marginTop: '8px' }}>
          <span style={{ marginRight: '16px' }}>Less</span>
          <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: '#F5EEF8', marginRight: '4px', border: '1px solid #333', boxSizing: 'border-box', borderRadius: '4px' }}></span>
          <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: '#EBDEF0', marginRight: '4px', border: '1px solid #333', boxSizing: 'border-box', borderRadius: '4px' }}></span>
          <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: '#D7BDE2', marginRight: '4px', border: '1px solid #333', boxSizing: 'border-box', borderRadius: '4px' }}></span>
          <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: '#C39BD3', marginRight: '4px', border: '1px solid #333', boxSizing: 'border-box', borderRadius: '4px' }}></span>
          <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: '#AF7AC5', marginRight: '4px', border: '1px solid #333', boxSizing: 'border-box', borderRadius: '4px' }}></span>
          <span>More</span>
        </div>
      </Col>
    </Row>
  );
}

export default Github;