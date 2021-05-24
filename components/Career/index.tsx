import React from "react";

function Career() {
    return (
        <div>
            <div className="dung">
                <div className={"container"}>
                    <div className={"navigation"}><a href={"/"}>&lt;Chọn chủ đề</a></div>
                    <div className={"endPage navigation"}>Rút thêm</div>
                </div>
                <h1 className={"bigTitle"}>Sự nghiệp</h1>
                <img src="/images/major/0 the-fool.png" alt="Tarot card"/>
                <div className={"tarotCardNumber upperCard"}>0.</div>
                <div className={"major upperCard"}>Chàng khờ</div>
                <div className={"minor"}>Tôi hào hứng với những cơ hội</div>
                <div className={"minor endPage"}>Tôi muốn ra khỏi vùng an toàn</div>
                <div className={"minor footNote1"}><i>*Các dự báo của tarot không xa hơn 1 năm</i></div>
            </div>
        </div>
    );
}

export default Career