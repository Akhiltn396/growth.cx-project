import React from "react";
import "./Customers.scss";

const Customers = () => {
  return (
    <div className="customers">
      <div className="chat-box">
        <div className="info">
          <div className="infoContainer">
            <h2>Harish Kumar</h2>
            <h2>CEO & Founder CrawIQ.ai </h2>

            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              accusamus nulla, optio sapiente laudantium est tenetur non, facere
              ratione iusto laborum sint saepe, aliquam nemo impedit dolor ex.
              Id, fuga!
            </p>
            <h2>Services Provided</h2>
            <div className="services">
              <h3>GTM Consulting</h3>
              <h3>Growth Marketing</h3>
              <h3>Design</h3>
            </div>
          </div>

          <div className="imageContainer">
            <img
              src="data:image/jpeg;base64,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"
              alt="person icon"
              className="img"
            />
          </div>
        </div>

        <div className="customer">“</div>
      </div>

      {/* 2nd customer */}
      <div className="chat-box">
        <div className="info">
          <div className="infoContainer">
            <h2>Qandle</h2>
            <h2>CEO & Founder Qandle </h2>

            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              accusamus nulla, optio sapiente laudantium est tenetur non, facere
              ratione iusto laborum sint saepe, aliquam nemo impedit dolor ex.
              Id, fuga!
            </p>
            <h2>Services Provided</h2>
            <div className="services">
              <h3>GTM Consulting</h3>
              <h3>Growth Marketing</h3>
              <h3>Design</h3>
            </div>
          </div>

          <div className="imageContainer">
            <img
              src="data:image/jpeg;base64,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"
              alt="person icon"
              className="img"
            />
          </div>
        </div>
        <div className="customer">”</div>
      </div>

      {/* 3rd customer */}
      <div className="chat-box">
        <div className="info">
          <div className="infoContainer">
            <h2>Qandle</h2>
            <h2>CEO & Founder Qandle </h2>

            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              accusamus nulla, optio sapiente laudantium est tenetur non, facere
              ratione iusto laborum sint saepe, aliquam nemo impedit dolor ex.
              Id, fuga!
            </p>
            <h2>Services Provided</h2>
            <div className="services">
              <h3>GTM Consulting</h3>
              <h3>Growth Marketing</h3>
              <h3>Design</h3>
            </div>
          </div>

          <div className="imageContainer">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHUAsAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAABAgADBAUHCAb/xAA8EAABAwMCAwcCAgUNAAAAAAABAAIDBAUREiEGMUEHEyJRYXGBFJEyoRVikrHBIyUzQlJygoOjsrPR4f/EABgBAQEBAQEAAAAAAAAAAAAAAAABAwIE/8QAHhEBAQACAwEBAQEAAAAAAAAAAAECEQMhMRJBQhP/2gAMAwEAAhEDEQA/AOqEIYTlBFLhHCbCbCBAEcJlEQuFNKZRAmF8xxZxtauGh3UzvqK0jIponDI9XH+qPz9FuOI7h+ibBcbgD4qene9n97Hh/PC8xmSSpqXyzyGV73anyP3LieZKlulxm3Q5e1O/VE2qnpaWBnMR6C/P+LP8Athau1t8ZMd5t4fgjDqY6T67E7/dfD0dkudwjEVsoJ5cnGsNwB8lbGXs4vcVMJ5JItfWLVuPnks7ySe1r/nb+O6Wq4U12t8FdRP1wTt1MJGD7EdD6LLwuIdm1fc7DxjDaquV4pqrwPjLvBqI8LgOhyMfK7itJdxlZq6LhDCZHCqK8IYVmFMIKSEpCuISFBSQi0JyFAEGSQhhPhDCAAJgEQEwagXHohhWAKEIK8KYT6UMIPmu0WIycD3oDYtpXO+2/wDBfB9mlDRR2tlTPBGJSSdcgGSPPddH4vY+axz0zWh0dQ10Mzepjc1wOPI8lza22WartNE1jO+7iMDuzkNcTzJAO/svNz5fj1cGP9On0k8BjaIZI3ejXgrAuXdtY5zpYwOZBdyXy/D1inpa5k72x04LgHNhidGHjPkTlay7cOVNdcampjk73Exa2N0esNbnyyFh1eq9ElncaK4tfJxvZmxYOqvg0uG4/pWld4IXDxaKyz19C9oEdWycSRgAYY7BHL7FdsopTUUcE5G8kTXn3IyvVw2a08nPjd7qzCGE+FMLZgTCmE+EMIKyEpCtISkIKiEAE5aphBkYQwmRQQBFQI4QDCmEyiBcIJkEGNXwOnpJGM/HjLfcclz+guP6Dqq6mrIngwyPcBjfSdx+9dJwuXdokr7XxXTVTWh0dTA3U08iRlpH2wsObCWbejg5Pm6rIfxi90kE0NtqauPOX9wwnQPTAOVqouMpWV887rdPR0rj4HSsIc456g8v/VtaYUFO36yO3xlku7w2LXv54WDX/SVFSys+gjiih8TXvgDA0+eMb9Vh09neyOfVcR8Q0UNJGY3mLvnB5wWM5En7rq0cbY42xsGGsAaB5ALnnZdTTV10ut+mYWxPxTwAnOwwSPjDfnK6MvTxYfOLwc2f1kmFMIqLViGEMJkEUhCUqwpSgqUTEIIL1FFEDBFAIoIoiogCCK1t4v8AabJGX3S4QU+BnQTl59mjJPwEGxXPuKX0XEl5q7aGE/QARveerz4tvbb81rr/ANr0TA+KwUBkOMCoqtm/DBufkhfA2fiuspL9U3CoxK6rkL6lgGkOyc5b5EZXPJhbjdO+PKY5brbVVZfOF9cMTu9gB8DiN2+60Vffbpd8QzP2O2Aea6VO+3X2jbV0U8cscjdwOYxscjmF8ncKG32fVW1cgbklsMYG8jvT/teXG96129Vt170+z7IrtEKep4fczTUUn8uH5z3jXHf5Bx910VeXLRxLcrZen3W2StiqSCwksDmlpxlpB6bD7Lp9h7YY3Bkd+tzmO5GekOW+5Ydx8Er2Y43TxZeuqqLT2biix3trf0bc4JXu5RE6JP2XYP5LcIiIIoFACEpCYpSikKCJQCC5DKUlRBYEQqwU2UDrCvN1pLLbZrhXyaIIRl2Bkk9AB1JPRZeVxjtjvklXe47PE/FPRsa97QfxSuGd/ZuPuVZN0a/ibtIvV4kcyildbqM7COE+Nw/Wfz+2PlfGPeXSOc45c45cTuXHzJ6qeh6jn5qvmR9logvVU8ZIJbseWcq7G6YgEHKIw6Rk9FNHU0s3dyxkOY4DcH38k1e+vuVUam4VT55SMB7uTR6DoFdjfARlDTlrc6Scb+S5+Y63VEUYYGgchurG82+6YDd2NgNgpj8l0guI2JHLdfbcHdpFystRBTXaaSstuQHl41SQjzaeZAONjn0XxBIz7JXFKPV0Msc8TJoXtkikaHMe05DgeRBTLm3YvfzW2iezTkmagw6Ik84nE7fB29iF0cndZ1RKQlElISoIUECVEDEoZQJS5QWApg5VAo5QXA5IXmnimsdXcT3apcAA+slDT+q1xa38gF6R1Y3XmCt8ddUPB/HI4++SSusUqlxw30VcbiSPlM4YHp5eSpDtJ9QQV0MpQpQ7ZElVCuO4KjiMgJTzb7qSaWvIYSWjkXc0DN3bnzJKDjhrvPCIwGj2VUjtjuihq1SOA2RcdIyMAeaWEHTqI1EnZM4CId5J4n8mhQfZ9j85puOYGF2PqKaWMjz5OH+1d6JXm7s8e6m41s8zju+qDCc/2gW/xXo7K4qmygUuUCVBCVAUhKgKBnFJlF5VaC0OTZVQRQOTsvMkzSJ5QBykdt8r00Oi811wEdxrYyd2VMjSPZxC7wSsR56O6rEk8L/dZkmDkbe2V0vs34Ws1Zw+LnX0MdRUSvkjLpfG0NDsfh5A7c+anJlMZuusMbldOWMd0T6l0HjLs9hpWyVtjcY2gFxppHZa7G/gd0PofuFzgHO+dlMM5l4ueFx9WOd4fkIEjPRAAuBA3VjoHuxuAtGZXP2VD3eeVkPpiR+PBHRZQ4ZvsuO6tVU/UMg6QM/crnK69dSW+MaFuGN6DCmnL9Z6bNCMhMB0S5a9vhc08wR0UD8tBaCfcYK6cthw07u+KLKc4/nCn/5Gr0mTuvMdly2/2t5OXfXQb/5jV6aPMrjJYbKUlRKVyoEqAoEoNO6Cx6rHNRRAyZRRBAvPPF8Labi28QxbN+skd+0dR/eiousUrRNgjmy97QdR5Y2C3lqvVzs9Iaa2VklPC4k6W4OCefPKKi0+ZZ2m7PBquI7xUUn0lRcZ5IXEEhxGdvXGfzWoMbNWdAyookxk8T6t9TQ0nVpGfQKZxkBRRKKpHuGN+a6aziCW18CWupZC2WeSERtc92w07AkdfuFFFhy4y2ba8dsl05xUYnlklkAL5HlxI6EnOyxnAZIxgtONQ2yoot2bNsQ1cRWhp63CnH+o1elzzUUWeSwClKii5UpSjmiog//Z"
              alt="person icon"
              className="img"
            />
          </div>
        </div>
        <div className="customer">“</div>
      </div>

      {/* 4th customer */}

      <div className="chat-box">
        <div className="info">
          <div className="infoContainer">
            <h2>Qandle</h2>
            <h2>CEO & Founder Qandle </h2>

            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              accusamus nulla, optio sapiente laudantium est tenetur non, facere
              ratione iusto laborum sint saepe, aliquam nemo impedit dolor ex.
              Id, fuga!
            </p>
            <h2>Services Provided</h2>
            <div className="services">
              <h3>GTM Consulting</h3>
              <h3>Growth Marketing</h3>
              <h3>Design</h3>
            </div>
          </div>

          <div className="imageContainer">
            <img
              src="data:image/jpeg;base64,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"
              alt="person icon"
              className="img"
            />
          </div>
        </div>
        <div className="customer">”</div>
      </div>
    </div>
  );
};

export default Customers;
