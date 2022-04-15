import "./bootstrap.css"

const Dashboard = (props) => {
  return (
    <div class="container">
      <br />
      <br />
      <br />
      <br />
      <br />

      <div class="container">
        <div class="main-body">
          <div class="row gutters-sm">

            {/* User Icon */}
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                  <div class="mt-3">
                    <h3>John Doe</h3>
                    <p class="text-secondary mb-1">Full Stack Developer</p>
                    <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Info */}
            <div class="card">
              <div class="card-body">
                <div class="flex flex-column align-items-center text-left">
                  <div class="row">
                    <div class="col-sm-3"><h6 class="mb-0">Name</h6></div>
                    <div class="col-sm-9 text-secondary">Kenneth Valdez</div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3"><h6 class="mb-0">Email</h6></div>
                    <div class="col-sm-9 text-secondary">fip@jukmuh.al</div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3"><h6 class="mb-0">Phone</h6></div>
                    <div class="col-sm-9 text-secondary">(239) 816-9029</div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3"><h6 class="mb-0">Mobile</h6></div>
                    <div class="col-sm-9 text-secondary">(320) 380-4539</div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3"><h6 class="mb-0">Address</h6></div>
                    <div class="col-sm-9 text-secondary">Bay Area, San Francisco, CA</div>
                  </div>
                  <hr/>
                </div>
              </div>
            </div>

            {/* Reserved Movies Starts Here */}
            <div class="card">
              <div class="card-body">
              <div class="flex flex-column align-items-center text-left">
                  <div class="row">
                  <h2 class="d-flex align-items-center text-info mb-5">🎟 Movie Ticket 🎟</h2>
                  </div>
                  <div class="row">
                    <div class="col-sm-3"><h6 class="mb-0">Title</h6></div>
                    <div class="col-sm-9 text-secondary">Frozon II</div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3"><h6 class="mb-0">Theatre</h6></div>
                    <div class="col-sm-9 text-secondary">Ithaca Movie Center</div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3"><h6 class="mb-0">Date</h6></div>
                    <div class="col-sm-9 text-secondary">May 28, 2022</div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3"><h6 class="mb-0">Time</h6></div>
                    <div class="col-sm-9 text-secondary">14:45 - 17:00</div>
                  </div>
                  <hr/>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="flex flex-column align-items-center text-left">
                  <div class="row">
                    <h2 class="d-flex align-items-center text-info mb-5">🎟 Movie Ticket 🎟</h2>
                  </div>
                  <div class="row">
                    <div class="col-sm-3"><h6 class="mb-0">Title</h6></div>
                    <div class="col-sm-9 text-secondary">Frozon II</div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3"><h6 class="mb-0">Theatre</h6></div>
                    <div class="col-sm-9 text-secondary">Ithaca Movie Center</div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3"><h6 class="mb-0">Date</h6></div>
                    <div class="col-sm-9 text-secondary">May 28, 2022</div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3"><h6 class="mb-0">Time</h6></div>
                    <div class="col-sm-9 text-secondary">14:45 - 17:00</div>
                  </div>
                  <hr/>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="flex flex-column align-items-center text-left">
                  <div class="row">
                    <h2 class="d-flex align-items-center text-info mb-5">🎟 Movie Ticket 🎟</h2>
                  </div>
                  <div class="row">
                    <div class="col-sm-3"><h6 class="mb-0">Title</h6></div>
                    <div class="col-sm-9 text-secondary">Frozon II</div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3"><h6 class="mb-0">Theatre</h6></div>
                    <div class="col-sm-9 text-secondary">Ithaca Movie Center</div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3"><h6 class="mb-0">Date</h6></div>
                    <div class="col-sm-9 text-secondary">May 28, 2022</div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3"><h6 class="mb-0">Time</h6></div>
                    <div class="col-sm-9 text-secondary">14:45 - 17:00</div>
                  </div>
                  <hr/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
