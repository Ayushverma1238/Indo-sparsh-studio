import React from "react";
import "./TeamDetails.css";

/**
 * TeamMarquee
 * A "My team" heading followed by a horizontal line of team-member cards
 * that scrolls continuously left -> right. Hover pauses it so the cards
 * are still readable/clickable.
 *
 * Theming is CSS-only, driven by body.dark-mode / body.light-mode set
 * elsewhere in the app — no props needed.
 *
 * Usage:
 *   <TeamMarquee />
 */

const TEAM = [
  {
    image: "/images/ayush.jpeg",
    name: "Aarav Mehta",
    role: "Lead Product Designer",
    study: "M.Des, IIT Bombay",
    bio: "Spends more time on type scales than most people spend on vacation. Came from a print-design background, which is why every sheet still gets crop marks.",
    focus: ["Design systems", "Interaction", "Typography"],
  },
  {
    image: "/images/ayush.jpeg",
    name: "Ayush Verma",
    role: "Software Developer Engineer",
    study: "B.Tech CSE(AI), BBD University, Lucknow",
    bio: "Crafts responsive websites and high-performance mobile apps, turning ideas into seamless digital experiences.",
    focus: ["React", "Performance", "Accessibility", "Full Stack Website"],
  },
];

const TRACK = [...TEAM, ...TEAM, ...TEAM, ...TEAM];

export default function TeamMarquee() {
  return (
    <section className="tm">
      <h2 className="tm-label">The people on the sheet</h2>
      <h1 className="tm-heading">My team</h1>

      <div className="tm-marquee">
        <div className="tm-track">
          {TRACK.map((member, i) => (
            <article className="tm-card" key={`${member.name}-${i}`}>
              <div className="profile-header">
                <div className="tm-avatar" aria-hidden="true">
                  {" "}
                  <img className="image" src={member.image} alt={member.name} />
                </div>
                <h3 className="tm-name">{member.name}</h3>
              </div>

              <p className="tm-role">{member.role}</p>
              <p className="tm-study">{member.study}</p>
              <p className="tm-bio">{member.bio}</p>

              <ul className="tm-focus">
                {member.focus.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
