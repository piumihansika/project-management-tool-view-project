import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><strong>ManageMint</strong></span>}>
            <Navigation>
                <a href="/">View Diagram</a>
                <a href="/">Logout</a>
                
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
    <div className="container">
    <form className="form-horizontal" id="viewProject" align="center" onSubmit={this.onSubmit} method="get" action="">
           
              <fieldset >
                <label >Task</label>
                <div className="form-group" align="center">
                     <input type="text"
                      className="form-control" 
                      id="taskname" 
                      name="Task Name"
                      placeholder="Task Name" 
                      ref="inputtaskname"
                       />
                  </div>
                  <label >Employee Type</label>
                    <div className="form-group" align="center">
                    
                      <input type="text"
                       className="form-control"   
                       id="employeetype" 
                       name="Employee Type " 
                       placeholder="Employee Type"
                       ref="inputemployeetype"
                          />
                  </div>
                  <label >Duration</label>
                  <div className="form-group" align="center">
                    
                      <input type="text"
                       className="form-control"   
                       id="from" 
                       name="Date From " 
                       placeholder="Date From"
                       ref="inputdatefrom"
                          />
                  </div>

                  <div className="form-group" align="center">
                     <input type="text"
                     className="form-control"   
                     id="to" 
                     name="Date To " 
                     placeholder="Date To"
                     ref="inputdateto"
                        />
                </div>

                <label >Employee Name</label>
                  <div className="form-group" align="center">
                    
                      <input type="text"
                       className="form-control"   
                       id="employeename" 
                       name="Employee Name " 
                       placeholder="Employee Name"
                       ref="inputemployeename"
                          />
                  </div>
                
                  <label >Employee Email</label>
                  <div className="form-group" align="center">
                    
                      <input type="text"
                       className="form-control"   
                       id="employeeemail" 
                       name="Employee Email " 
                       placeholder="Employee Email"
                       ref="inputemployeeemail"
                          />
                  </div>
               </fieldset> 
                  <fieldset>
          <div className="addtask-button">
        <button type="submit" className="btn-primary" id="addtask-button"   >
          Add Task
        </button>
      </div>
    </fieldset> 
  </form>
 </div>
</div>
    );
  }
}

export default App;
