import styles from "./ProjectCard.module.css"

export default function ProjectCard({project}) {
    return (
        <div className={styles.projectCard}>
            <h1 className={styles.projectTitle}>{project.fields.Name}</h1>
            <p>{project.fields.TemporalFocusStatus}</p>
            <pre>{JSON.stringify(project, null, 4)}</pre>
            {/* <div className={styles.microprojectCard}>
            {mp.fields.MainImageURL &&  <img src={mp.fields.MainImageURL} style={{width: "100%", height: "auto"}}/>}
           
            <h2>{mp.fields.Title}</h2>
            <p>{mp.fields.Description}</p> */}
        </div>   
        </div>   
    )
         
}

