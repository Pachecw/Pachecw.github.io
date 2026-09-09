import { activities } from '../data/activities'

export default function Activities() {
  return (
    <section id="alem-da-sala" className="activities">
      <h2>Extracurriculares</h2>
      <ul className="activity-list">
        {activities.map((activity) => (
          <li key={activity.id} className="activity-entry">
            <div className="activity-entry-header">
              <h3>{activity.title}</h3>
              <span className="activity-period">{activity.period}</span>
            </div>
            <ul className="activity-highlights">
              {activity.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
