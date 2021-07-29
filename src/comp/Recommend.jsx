import React from 'react'
import { Link } from 'react-router-dom'

const Recommend = () => {
    return (
        <Container>
            <h4>Recommended For You</h4>
            <Content>
                <Wrap>
                    <Link to='/'>
                        <img src="" alt="" />
                    </Link>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Recommend
