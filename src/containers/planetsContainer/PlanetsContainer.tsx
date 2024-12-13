import { Card } from 'components/card'
import {
  PlanetsContainerCardContent,
  PlanetsContainerPlanetInfo,
  PlanetsContainerSearchContainer,
  PlanetsContainerSearchInput,
  PlanetsContainerTitle,
  PlanetsContainerWrapper,
} from './PlanetsContainer.styles'
import { usePlanets } from './usePlanets'
import { useMemo, useState } from 'react'
import { useDebouncedValue } from '@mantine/hooks'
import { Skeleton } from 'components/skeleton'

const PlanetInfo = ({
  title,
  data,
}: {
  title: string
  data: string | number
}) => {
  return (
    <PlanetsContainerPlanetInfo>
      <h4>{title}: </h4>
      <p>{data}</p>
    </PlanetsContainerPlanetInfo>
  )
}

export const PlanetsContainer = () => {
  const { data, isLoading } = usePlanets()
  const [searchValue, setSearchValue] = useState('')
  const [debouncedValue] = useDebouncedValue(searchValue, 200)

  const filteredPlanetsByName = useMemo(
    () =>
      data?.planets?.filter((planet) => {
        return planet.name.toLowerCase().includes(debouncedValue.toLowerCase())
      }),
    [debouncedValue, data?.planets]
  )

  return (
    <div>
      <PlanetsContainerTitle>Planets</PlanetsContainerTitle>

      <PlanetsContainerSearchContainer>
        <label htmlFor='search'>Enter a planet name to search</label>

        <PlanetsContainerSearchInput
          id='search'
          type='text'
          placeholder='Search by name'
          value={searchValue}
          onChange={(e) => setSearchValue(e.currentTarget.value)}
        />
      </PlanetsContainerSearchContainer>

      <PlanetsContainerWrapper>
        {isLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
            <Card key={index}>
              <Card.Title>
                <Skeleton />
              </Card.Title>
              <Card.Content>
                <PlanetsContainerCardContent>
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                  <Skeleton />
                </PlanetsContainerCardContent>
              </Card.Content>
            </Card>
          ))}

        {!isLoading &&
          filteredPlanetsByName?.map((planet) => (
            <Card key={planet.id}>
              {/* random image, should be replaced with a real planet image */}
              <Card.Image src='https://picsum.photos/200' />

              <Card.Title>{planet.name}</Card.Title>

              <Card.Content>
                <PlanetsContainerCardContent>
                  <PlanetInfo title='Population' data={planet.population} />
                  <PlanetInfo
                    title='Residents'
                    data={planet.residents.length}
                  />
                  <PlanetInfo title='Diameter' data={planet.diameter} />
                  <PlanetInfo title='Climate' data={planet.climate} />
                  <PlanetInfo title='Terrain' data={planet.terrain} />
                </PlanetsContainerCardContent>
              </Card.Content>
            </Card>
          ))}
      </PlanetsContainerWrapper>
    </div>
  )
}
