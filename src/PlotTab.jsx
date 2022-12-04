import React, { useState } from 'react'
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import plotdata from './assets/plot.json'

const PlotTab = () => {
  const [station, setStation] = useState("2")
  const [species, setSpecies] = useState('Lanceola sayana')
  const data_instance = plotdata.find(row => row.species === species && row.station === station)
  const plot = () => {
    if (data_instance) {
      return <ResponsiveContainer height='100%'>
          <ScatterChart>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis type='number' dataKey='x' name='Profundidad' unit='m'/>
            <YAxis type='number' dataKey='y' name='Abundancia'/>
            <Scatter data={data_instance.plot} dataKey='y' fill="#8884d8" line shape='circle'/>
          </ScatterChart>
        </ResponsiveContainer>
    } else {
      return <h3>Instance Not Found</h3>
    }
  }
  const speciesStatus = (status) => {
    if (status) {
      if (status === 1) {
        return <h4 style={{color:'green'}}>Sin peligro</h4>
      } else if (status === 2) {
        return <h4 style={{color:'orange'}}>Vulnerable</h4>
      } else {
        return <h4 style={{color:'red'}}>En peligro</h4>
      }
    } else {
      return <h3>Instance Not Found</h3>
    }
  }

  return (<>
    <span>
      Estación:
      <select name='sel-station' onChange={(event) => setStation(event.target.value)}>
        <option value={2}>Estación 2</option>
        <option value={4}>Estación 4</option>
      </select>
    </span>
    <span>
      Especie:
      <select name="sel-species" onChange={(event) => setSpecies(event.target.value)}>
        <option value="Lanceola sayana">Lanceola sayana</option>
        <option value="Bathylagus pacificus">Bathylagus pacificus</option>
        <option value="Subeucalanus monachus">Subeucalanus monachus</option>
        <option value="Melamphaes typhlops">Melamphaes typhlops</option>
        <option value="Paramollicia major">Paramollicia major</option>
        <option value="Pseudosagitta maxima">Pseudosagitta maxima</option>
        <option value="Gigantocypris dracontovalis">Gigantocypris dracontovalis</option>
        <option value="Euphausia mucronata">Euphausia mucronata</option>
        <option value="Bentheogennema corbariae">Bentheogennema corbariae</option>
        <option value="Edwardsia longicornis">Edwardsia longicornis</option>
      </select>
    </span>
    <span>
      Estado de conservación: {speciesStatus(data_instance.danger)}
    </span>
    {plot()}
  </>)
}

export default PlotTab