import React from 'react';
import { Card, Row, Col, Table, Button, ProgressBar, ListGroup } from 'react-bootstrap';
import '../stylesheets/Card.css'; // Import your CSS file

function Dashboard() {
  return (<div className="p-4">

    <div class="cards">
    <div class="card red">
        <p class="tip">General Ward</p>
        <p class="second-text">Ankita patil </p>
    </div>
    <div class="card blue">
        <p class="tip">Female Medical</p>
        <p class="second-text">Allen mathew</p>
    </div>
    <div class="card green">
        <p class="tip">Male Ortho</p>
        <p class="second-text">Asmita pillai</p>
    </div>
</div>
<div class="cards">

    
    <div class="card green">
        <p class="tip">OPD</p>
        <p class="second-text">Prathik kurup </p>
    </div>
    <div class="card blue">
        <p class="tip">ENT</p>
        <p class="second-text">Lorem Ipsum</p>
    </div>
    <div class="card red">
        <p class="tip">Casualty</p>
        <p class="second-text">Lorem Ipsum</p>
    </div>
</div>
<div class="cards">
<div class="card green">
        <p class="tip">Female ortho</p>
        <p class="second-text">Lorem Ipsum</p>
    </div>
    <div class="card red">
        <p class="tip">Surgical OT</p>
        <p class="second-text">Lorem Ipsum</p>
    </div>
    <div class="card blue">
        <p class="tip">Pediatric</p>
        <p class="second-text">Lorem Ipsum</p>
    </div>

</div>
  </div>
);
}

export default Dashboard;