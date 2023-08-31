import React from 'react';
import './new.css';
import logo from '../../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function News() {
    const newsData = [
        {
            title: 'ข่าวสารที่ 1',
            description: 'รายละเอียดข่าวสารที่ 1...',
            image: logo
        },
        {
            title: 'ข่าวสารที่ 2',
            description: 'รายละเอียดข่าวสารที่ 2...',
            image: logo
        }
    ];

    return (
        <div className="app">
            <div className="main-content">
            <div className="info">
          <h1>บอร์ดข่าวสาร</h1>
        </div>
                <div className="row">
                    {newsData.map((news, index) => (
                        <div key={index} className="col-md-6 mb-4">
                            <div className="card">
                                <img
                                    src={news.image}
                                    className="card-img-top"
                                    alt={`ข่าวสารที่ ${index + 1}`}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{news.title}</h5>
                                    <p className="card-text">{news.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="add-button">
                    <button className="btn btn-primary">Add</button>
                </div>
            </div>
        </div>
    );
}

export default News;
