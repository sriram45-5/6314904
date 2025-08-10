import React from 'react';

const OfficeList = () => {
  const offices = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "SmartWorks", Rent: 75000, Address: "Bangalore" },
    { Name: "Regus", Rent: 60000, Address: "Hyderabad" },
    { Name: "WeWork", Rent: 85000, Address: "Mumbai" }
  ];

  return (
    <div>
      {offices.map((item, index) => {
        const rentClass = item.Rent <= 60000 ? 'textRed' : 'textGreen';
        return (
          <div key={index} className="officeCard">
            <h2>Name: {item.Name}</h2>
            <h3 className={rentClass}>Rent: ₹{item.Rent}</h3>
            <h4>Address: {item.Address}</h4>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default OfficeList;
