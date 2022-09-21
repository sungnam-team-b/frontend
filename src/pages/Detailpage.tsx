import React from "react";
import Mainbackground from "@components/Mainbackground";
import Topmenu from "@components/Topmenu";
import Detailbox from "@components/Detailbox";
import Backbutton from "@components/Backbutton";
import { useLocation } from "react-router";
import Mainbackground4 from "@components/Mainbackground4";
import result from "@images/result.png";
import Backbutton2 from "@components/Backbutton2";

function Detailpage() {
  const { state } = useLocation();
  console.log(state);

  var luck;

  if (state.name === "호랑이띠") {
    luck =
      "동서남북 사방의 운이 열리고, 최선을 다하면 하늘도 내 편이 되는 시기다. 하고 싶은 일이 있다면 계획을 잘 세워서 미루지 말고, 자신감을 갖고 실행으로 옮겨 볼 것.";
  } else if (state.name === "닭띠") {
    luck =
      "겉과 속이 다를 수 있는 시기다. 눈으로 보이는 것은 좋을 수 있지만, 실속이 신통치 않을 수도 있다. 따라서 내실을 기해야 하고, 손익 계산을 잘하면서 일해야 한다.";
  } else if (state.name === "소띠") {
    luck =
      "서두르지 않고, 기다리는 지혜가 필요한 시기다. 일할 때는 한 번에 하기보다 나누고, 즐기면서 천천히 하는 게 좋다. 또 새 일을 만들기보다 기존의 일에 충실할 것.";
  } else if (state.name === "개띠") {
    luck =
      "화려함 속에 그늘이 있는 시기다. 열심히 일해서 좋은 결실을 거두지만, 공은 다른 사람 것으로 돌아갈 수 있다. 내가 주인공이 되려 하지 말고, 조연으로 만족을 할 것.";
  } else if (state.name === "용띠") {
    luck =
      "포용심과 이해심이 필요한 시기다. 상대방과 벽을 쌓기보다 나와 다를 수 있음을 인정할 것. 서로 다른 것이 조화를 이루게 될 때 시너지 효과가 더욱 증폭될 수 있다.";
  } else if (state.name === "말띠") {
    luck =
      "삶의 질이 한 단계 높아질 수 있는 시기다. 진행하는 일에서 좋은 결실을 거두게 되고, 이익과 연결될 수 있다. 그동안 꼬였던 일은 풀리고, 막혔던 일은 뚫릴 수도 있다.";
  } else if (state.name === "원숭이띠") {
    luck =
      "변화가 생길 수 있는 시기다. 이사를 하거나 새 일을 할 수도 있다. 여행을 떠나게 되거나 외국으로 나갈 일이 생길 수도 있다. 바빠지는 만큼 몸에도 신경을 써야 한다.";
  } else if (state.name === "쥐띠") {
    luck =
      "받기보다 베푸는 시기다. 경쟁하기보다 양보하는 삶의 자세를 가질 필요가 있다. 결과를 잘 예측하고, 계획을 세워서 진행하되 무리하게 일을 벌일 필요는 없다.";
  } else if (state.name === "돼지띠") {
    luck =
      "하나보다 둘, 둘보다 셋이 좋은 시기다. 혼자서 일을 하기보다 능력이 있고, 마음이 맞는 사람들과 함께할 것. 한편 새로운 일을 하거나 삶에 변화가 생길 수도 있다.";
  } else if (state.name === "양띠") {
    luck =
      "인간관계에 신경을 써야 한다. 모임에 참석하거나 만남을 자주 하는 것보다 꼭 필요할 때만 가도록 할 것. 일은 잘하지 말고, 못하지도 말고 적당히 보통만 하면 된다.";
  } else if (state.name === "뱀띠") {
    luck =
      "조심하고, 주의해야 하는 시기다. 복지부동하며 기존의 것을 잘 지켜야 한다. 가까운 사람일수록 비밀을 알려 주지 말고, 친인척과 감정의 충돌이 발생하지 않도록 주의. ";
  } else if (state.name === "토끼띠") {
    luck =
      "삶이란 서바이벌이고, 경쟁이 생길 수 있는 시기다. 경쟁을 귀찮게 생각해서 피하려 하기보다 오히려 기회로 삼아서 발전의 토대로 만들어야 한다. 정면으로 승부를 내자.";
  }
  console.log(luck);

  return (
    <div>
      <Mainbackground4>
        <Topmenu />
        <div className="flex flex-row">
          <div className="w-[50vw] h-[100vh]  flex items-center justify-center">
            <div
              className="absolute w-[18rem] h-[18rem] md:w-[30rem] md:h-[30rem] bg-cover grid place-items-center"
              style={{ background: `url(${result})`, backgroundSize: "100%" }}
            >
              <div className="absolute w-[10rem] h-[10rem] mt-5 md:w-[15rem] md:h-[15rem] z-40 mb-20">
                <img src={state.great_url} alt="" />
              </div>

              <div className="z-40 mt-[12rem] md:mt-[22rem] ">{state.name}</div>
            </div>
          </div>
          <div className="w-[50vw] h-[100vh] flex items-left justify-center flex flex-col">
            <div className="w-[30vw] text-[#F4DDB2] mb-4 text-center text-[1.5rem] ">
              올해의 운세와 성격
            </div>

            <div className="w-[30vw] text-[#F4DDB2] mb-4 ">{luck}</div>

            <div className="w-[30vw] text-white">{state.description}</div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-menubuttonspacing4 flex justify-center ">
          <Backbutton2 />
        </div>
      </Mainbackground4>
    </div>
  );
}

export default Detailpage;
