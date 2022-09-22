import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {LoggedInParamList} from '../../../AppInner';
import VisitedList from '../../components/completed/VisitedList';

// 임시 데이터
export const visitedMountainList = [
  {
    id: 1,
    mountain: '계룡산',
    location: '대전광역시 유성구',
    trailList: [
      {
        id: 1,
        trail: '계룡산 1번 코스',
        level: '상',
        timeDuration: '1시간 30분',
        location: '대전광역시 유성구 계룡산 1번 코스',
        visitedDate: '2022.09.02',
      },
      {
        id: 2,
        trail: '계룡산 2번 코스',
        level: '중',
        timeDuration: '1시간',
        location: '대전광역시 유성구 계룡산 2번 코스',
        visitedDate: '2022.08.02',
      },
    ],
  },
  {
    id: 2,
    mountain: '북한산',
    location: '서울특별시 은평구',
    trailList: [
      {
        id: 1,
        trail: '북한산 1번 코스',
        level: '상',
        timeDuration: '1시간 30분',
        location: '서울특별시 은평구 북한산 1번 코스',
        visitedDate: '2022.09.02',
      },
      {
        id: 2,
        trail: '북한산 2번 코스',
        level: '중',
        timeDuration: '1시간',
        location: '서울특별시 은평구 북한산 2번 코스',
        visitedDate: '2022.08.02',
      },
    ],
  },
  {
    id: 3,
    mountain: '한라산',
    location: '제주도',
    trailList: [
      {
        id: 1,
        trail: '한라산 1번 코스',
        level: '상',
        timeDuration: '1시간 30분',
        location: '제주도 한라산 1번 코스',
        visitedDate: '2022.09.02',
      },
      {
        id: 2,
        trail: '한라산 2번 코스',
        level: '중',
        timeDuration: '1시간',
        location: '제주도 한라산 2번 코스',
        visitedDate: '2022.08.02',
      },
    ],
  },
  {
    id: 4,
    mountain: '지리산',
    location: '경상남도, 전라북도',
    trailList: [
      {
        id: 1,
        trail: '지리산 1번 코스',
        level: '상',
        timeDuration: '1시간 30분',
        location: '경상남도 지리산 1번 코스',
        visitedDate: '2022.09.02',
      },
      {
        id: 2,
        trail: '지리산 2번 코스',
        level: '중',
        timeDuration: '1시간',
        location: '경상남도 지리산 2번 코스',
        visitedDate: '2022.08.02',
      },
    ],
  },
  {
    id: 5,
    mountain: '계룡산',
    location: '대전광역시 유성구',
    trailList: [
      {
        id: 1,
        trail: '계룡산 1번 코스',
        level: '상',
        timeDuration: '1시간 30분',
        location: '대전광역시 유성구 계룡산 1번 코스',
        visitedDate: '2022.09.02',
      },
      {
        id: 2,
        trail: '계룡산 2번 코스',
        level: '중',
        timeDuration: '1시간',
        location: '대전광역시 유성구 계룡산 2번 코스',
        visitedDate: '2022.08.02',
      },
    ],
  },
  {
    id: 6,
    mountain: '북한산',
    location: '서울특별시 은평구',
    trailList: [
      {
        id: 1,
        trail: '북한산 1번 코스',
        level: '상',
        timeDuration: '1시간 30분',
        location: '서울특별시 은평구 북한산 1번 코스',
        visitedDate: '2022.09.02',
      },
      {
        id: 2,
        trail: '북한산 2번 코스',
        level: '중',
        timeDuration: '1시간',
        location: '서울특별시 은평구 북한산 2번 코스',
        visitedDate: '2022.08.02',
      },
    ],
  },
  {
    id: 7,
    mountain: '한라산',
    location: '제주도',
    trailList: [
      {
        id: 1,
        trail: '한라산 1번 코스',
        level: '상',
        timeDuration: '1시간 30분',
        location: '제주도 한라산 1번 코스',
        visitedDate: '2022.09.02',
      },
      {
        id: 2,
        trail: '한라산 2번 코스',
        level: '중',
        timeDuration: '1시간',
        location: '제주도 한라산 2번 코스',
        visitedDate: '2022.08.02',
      },
    ],
  },
  {
    id: 8,
    mountain: '지리산',
    location: '경상남도, 전라북도',
    trailList: [
      {
        id: 1,
        trail: '지리산 1번 코스',
        level: '상',
        timeDuration: '1시간 30분',
        location: '경상남도 지리산 1번 코스',
        visitedDate: '2022.09.02',
      },
      {
        id: 2,
        trail: '지리산 2번 코스',
        level: '중',
        timeDuration: '1시간',
        location: '경상남도 지리산 2번 코스',
        visitedDate: '2022.08.02',
      },
    ],
  },
];

// navigation 사용을 위해 props 설정
type VisitedScreenProps = NativeStackScreenProps<LoggedInParamList, 'Visited'>;

function Visited({navigation}: VisitedScreenProps) {
  // 방문한 산 상세 페이지 이동 함수
  const moveToVisitedDetail = (
    trails: any,
    mountain: string,
    location: string,
  ) => {
    navigation.navigate('VisitedDetail', {
      trails: trails,
      mountain: mountain,
      location: location,
    });
  };
  return (
    <View>
      <VisitedList
        visitedMountainList={visitedMountainList}
        moveToVisitedDetail={moveToVisitedDetail}
      />
    </View>
  );
}

export default Visited;