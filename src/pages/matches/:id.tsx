import { useParams } from 'react-router-dom';
import { Fragment } from 'react';
import { MatchGrid } from '../../components/MatchGrid';

export const Match = () => {
    const { id } = useParams()

    return (
        <Fragment>
            <h1>Event {id}</h1>

            <MatchGrid />
        </Fragment>
    );
};
