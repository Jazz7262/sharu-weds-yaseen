import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="invite-note-wrapper">
                <h5>An Invitation from:</h5>
                <h2>Mrs. & Mr. Alhaj K. Khader Basha</h2>

                <h5 className="address mb-3">
                    Proprietor: KKB and KGN Function Hall,
                    <br /> Class-I Contractor.
                </h5>
                <h5 className="address mb-3">
                    H.No.: 1/541/136, Opposite Rahmania Masjid,
                    <br /> NGO's Colony, Adoni,
                    <br /> Kurnool Dist.,
                    <br /> AP - 518 301.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 94402 19680, <br />
                    +91 98663 45390, <br />
                    +91 91827 72852.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
