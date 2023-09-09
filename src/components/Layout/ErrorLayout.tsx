import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

export const ErrorLayout = () => {
    return (
        <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Link to="/"><Button type="primary">Back Home</Button></Link>}
            />
        </div>
    );
};