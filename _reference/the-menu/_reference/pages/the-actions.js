import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Print.module.css'
import { getActions, getEvents, getProjects, getMicroprojects } from '../utils/get-weekly-data';
// import WeeklyDoc from '../components/weekly-doc';
import ActionList from '../components/airtable-records/action-list';
import ProjectList from '../components/airtable-records/project-list';
import MicroprojectList from '../components/airtable-records/microproject-list';
import EventList from '../components/airtable-records/event-list';
import Stringify from '../components/utilities/stringify';

export async function getStaticProps() {
    const allActions = await getActions();
    const allEvents = await getEvents();
    const allProjects = await getProjects();
    const allMicroprojects = await getMicroprojects();
    console.log(`getting events`)
    // console.log(JSON.stringify(allEvents))
    return {
        props: {
            actions: JSON.parse(JSON.stringify(allActions)),
            events: JSON.parse(JSON.stringify(allEvents)),
            microprojects: JSON.parse(JSON.stringify(allMicroprojects)),
            projects: JSON.parse(JSON.stringify(allProjects))
        },
    };
}


export default function Week(props) {
    // console.log(JSON.stringify(props.actions))
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    The Actions
                </h1>
                <ActionList actions={props.actions} />               
            </main>
        </div>
    )
}
