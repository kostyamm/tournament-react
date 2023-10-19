const roundsMock = [
    {
        id: 1,
        title: 'Round one',
        status: 'wait',
        pairs: [
            {
                id: 1,
                date: null,
                winner_id: 1,
                is_draw: false,
                teams: [{ id: 1, name: 'Team 1' }, { id: 2, name: 'Team 2' }],
            },
            {
                id: 2,
                date: new Date().toDateString(),
                winner_id: 1,
                is_draw: false,
                teams: [{ id: 3, name: 'Team 3' }, { id: 4, name: 'Team 4' }],
            },
            {
                id: 3,
                date: new Date().toDateString(),
                winner_id: 1,
                is_draw: false,
                teams: [{ id: 5, name: 'Team 5' }, { id: 6, name: 'Team 6' }],
            },
            {
                id: 4,
                date: new Date().toDateString(),
                winner_id: 1,
                is_draw: false,
                teams: [{ id: 7, name: 'Team 7' }, { id: 8, name: 'Team 8' }],
            },
        ],
    },
    {
        id: 2,
        title: 'Round two',
        status: 'process',
        pairs: [
            {
                id: 5,
                date: new Date().toDateString(),
                winner_id: 1,
                is_draw: false,
                teams: [{ id: 1, name: 'Team 1' }, { id: 6, name: 'Team 6' }],
            },
            {
                id: 6,
                date: new Date().toDateString(),
                winner_id: 1,
                is_draw: false,
                teams: [{ id: 3, name: 'Team 3' }, { id: 8, name: 'Team 8' }],
            },
        ],
    },
    {
        id: 3,
        title: 'Round three',
        status: 'wait',
        pairs: [
            {
                id: 7,
                date: new Date().toDateString(),
                winner_id: 1,
                is_draw: false,
                teams: [{ id: 1, name: 'Team 1' }, { id: 3, name: 'Team 3' }],
            },
        ],
    },
];

export const MatchGrid = () => {
    return (
        <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {roundsMock.map((round) => {
                return (
                    <MatchGridRound key={round.id} {...round} />
                );
            })}
        </div>
    );
};

const MatchGridRound = ({ title, status, pairs }: any) => {
    return (
        <div style={{ minWidth: 300 }}>
            <h2>{title} - {status}</h2>

            <div style={{ marginBottom: 24 }}>
                {pairs.map((pair) => {
                    return <MatchGridRoundPair key={pair.id} {...pair} />;
                })}
            </div>
        </div>
    );
};

const MatchGridRoundPair = ({ id, date, winner_id, is_draw, teams }) => {
    return (
        <div style={{ marginBottom: 24 }}>
            {teams.map(({ id, name }) => {
                return (
                    <div key={id}>{name}</div>
                );
            })}
        </div>
    );
};