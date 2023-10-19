import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const eventList = [
    { id: 1, title: 'event 1', status: 'wait' },
    { id: 2, title: 'event 2', status: 'wait' },
    { id: 3, title: 'event 3', status: 'wait' },
    { id: 4, title: 'event 4', status: 'wait' },
];

export const Events = () => {

    return (
        <Fragment>
            <h1>
                Event List
            </h1>

            <ul>
                {eventList.map(({ id, title }) => (
                    <li key={id}>
                        <Link to={`${id}`} children={title} />
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};
