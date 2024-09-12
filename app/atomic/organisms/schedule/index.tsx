import { useEffect, useState } from 'react'

import { InputTaskProps } from '@app/features/tasks/helper'
import useListTasks from '@app/features/tasks/hooks/useListTasks'
import useListUsers from '@app/features/tasks/hooks/useListUsers'
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Text,
  theme,
} from '@chakra-ui/react'
import { addDays } from 'date-fns'
import moment from 'moment'
import { GrUserWorker } from 'react-icons/gr'

import { setWeek } from './setWeek'
import { FaCheckCircle, FaRegClock } from 'react-icons/fa'
import { TaskStatus } from '@app/generated/graphql'

type Props = {
  handleEditTask?: any
  setInitialValues?: (value: InputTaskProps) => void
}

export const WeekScheduleTable: React.FC<Props> = ({
  handleEditTask,
  setInitialValues,
}) => {
  const startInterval = new Date()
  const initialDayOfWeek = moment(startInterval).toDate()
  const [referenceDate, setReferenceDate] = useState(initialDayOfWeek)

  const [dateInterval, setInterval] = useState({
    initial: addDays(referenceDate, -1),
    final: addDays(referenceDate, 7),
  })

  const { data: taskDate, refetch } = useListTasks()

  const { data: usersData } = useListUsers()

  useEffect(() => {
    setInterval({
      initial: referenceDate,
      final: addDays(referenceDate, 6),
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [referenceDate])

  useEffect(() => {
    refetch({
      filter: {
        date: {
          between: {
            lower: dateInterval?.initial,
            upper: dateInterval?.final,
          },
        },
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [referenceDate, refetch, dateInterval])

  function handleOnEdit(values) {
    setInitialValues({
      id: values?.value?.id,
      title: values?.value?.title,
      description: values?.value?.description,
      userId: values?.value?.userId,
      userName: values?.value?.userName,
      date: values?.value?.date,
    })

    handleEditTask()
  }

  const TaskCard = (value) => {
    let user = ''
    usersData?.users?.nodes?.map((item) => {
      if (item?.id === value?.value?.userId) {
        user = item?.name
      }
    })

    const getStatusIcon = (status) => {
      if (status === TaskStatus?.Done) {
        return <Icon as={FaCheckCircle} color="primary" />;
      }
      return <Icon as={FaRegClock} color="vividOrange" />;
    };

    const getStatusText = (status) => {
      return status === TaskStatus?.Done ? 'Concluída' : 'Pendente';
    };

    return (
      <Flex
        flexDirection="column"
        cursor="pointer"
        minH="110px"
        mt="10px"
        onClick={() => handleOnEdit(value)}
      >
        <Flex
          flexDirection="column"
          backgroundColor="rgba(243, 242, 242, 1)"
          padding="10px 10px"
          paddingBottom={'10px'}
          borderTopRightRadius="5px"
          borderTopLeftRadius="5px"
          borderBottomRightRadius={'5px'}
          borderBottomLeftRadius={'5px'}
          height="100%"
          minWidth="120px"
          gap="5px"
          justifyContent="center"
        >
          <Text
            fontSize="16px"
            lineHeight="21.28px"
            fontWeight="700"
            textAlign="center"
          >
            {value?.value?.title}
          </Text>
          <Text
            fontSize="12px"
            lineHeight="15.96px"
            fontWeight="400"
            textAlign="center"
          >
            {value?.value?.description}
          </Text>
          <Flex
            flexDir="row"
            justifyContent="center"
            textAlign="center"
            mt="5px"
          >
            <Icon as={GrUserWorker} color="gray" />
            <Text
              fontSize="12px"
              lineHeight="15.96px"
              fontWeight="400"
              textAlign="center"
              ml="5px"
            >
              {user}
            </Text>
          </Flex>

          <Flex
            flexDir="row"
            justifyContent="center"
            alignItems="center"
            mt="5px"
          >
            {getStatusIcon(value?.value?.status)}
            <Text
              fontSize="12px"
              lineHeight="15.96px"
              fontWeight="400"
              textAlign="center"
              ml="5px"
            >
              {getStatusText(value?.value?.status)}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex
      w="100%"
      flexDirection="column"
      bgColor="primary"
      borderRadius={5}
      border="5px solid"
      borderColor="primary"
    >
      <Box style={{ opacity: 1, zIndex: 5, marginTop: 10 }}>
        <Box
          display={'flex'}
          width={'100%'}
          flexWrap={'nowrap'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Box
            style={{
              cursor: 'pointer',
              padding: '0px 5px',
            }}
            onClick={() =>
              setReferenceDate(addDays(referenceDate, -7))
            }
          >
            <Button variant="none" size="sm">
              <Image src="/assets/icons/backward.svg" alt="Voltar" />
            </Button>
          </Box>
          <Text
            fontWeight="400"
            textAlign="center"
            color="white"
            pl={5}
            pr={5}
          >
            {setWeek(referenceDate)?.[0].date.day}/
            {setWeek(referenceDate)?.[0].date.month}/
            {setWeek(referenceDate)?.[0].date.year} á{' '}
            {setWeek(referenceDate)?.[6].date.day}/
            {setWeek(referenceDate)?.[6].date.month}/
            {setWeek(referenceDate)?.[6].date.year}
          </Text>
          <Box
            style={{
              cursor: 'pointer',
              padding: '0px 5px',
            }}
          >
            <Button
              variant="none"
              size="sm"
              onClick={() =>
                setReferenceDate(addDays(referenceDate, 7))
              }
            >
              <Image src="/assets/icons/forward.svg" alt="Avançar" />
            </Button>
          </Box>
        </Box>
      </Box>
      <Flex
        flexDirection="column"
        w="100%"
        borderRadius="20px"
        paddingTop="0px"
      >
        <Flex
          w="100%"
          display="grid"
          mt="10px"
          gridTemplateColumns={'repeat(7, 1fr)'}
          overflowX={'auto'}
        >
          {setWeek(referenceDate)?.map((value) => (
            <Flex
              key={1}
              display="grid"
              padding="20px 10px"
              backgroundColor="white"
            >
              <Text fontWeight="500" textAlign="center">
                {value?.weekDay}
              </Text>

              <Flex
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                gap="10px"
                backgroundColor={'white'}
              >
                {taskDate?.tasks?.nodes
                  ?.filter(
                    (v) => v?.dayOfWeek === value?.weekIndexDay,
                  )
                  ?.map((t: any) => (
                    <TaskCard key={t?.id} value={t} />
                  ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default WeekScheduleTable
