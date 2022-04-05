import React from 'react';

const ParticlesPage = () => {
    // Get demo blocks
    // const demo = document.querySelectorAll('.cb-demo');

    // // Demo: 1
    // const demoParticles = document.querySelector('.cb-particles');
    // const particles = new Particles({
    //     container: demoParticles,
    // <div class="cb-particles-item -emoji -v2 -s6" style="transform: translate3d(0px, 158.223px, 0px); will-change: transform;">🎉</div>
    //     itemsSelector: ".cb-particles-item",
    // });<div class="cb-particles-item -emoji -v6 -s6" style="transform: translate3d(0px, 1125.48px, 0px); will-change: transform;">💎</div>

    return (
        <div className="" style={{ minHeight: '100vh' }} >
            <div className="" style={{ position: 'relative', padding: '2px', width: '100%' }}>
                <div className="snowflakes">
                    <div className="snowflake">
                        👍
                    </div>
                    <div className="snowflake">
                        🎉
                    </div>
                    <div className="snowflake">
                        💰
                    </div>
                    <div className="snowflake">
                        💲
                    </div>
                    <div className="snowflake">
                        🧧
                    </div>
                    <div className="snowflake">
                        💵
                    </div>
                    <div className="snowflake">
                        💎
                    </div>
                    <div className="snowflake">
                        🤑
                    </div>
                    <div className="snowflake">
                        💸
                    </div>
                    <div className="snowflake">
                        🎁
                    </div>

                </div>

                <div><h2 style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Emoji Downfall</h2></div>
            </div>
        </div>
    );
}

export default ParticlesPage;