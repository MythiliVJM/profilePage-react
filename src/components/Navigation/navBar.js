import React from "react";
import "./navBar.css";


export default function Navbar() {
  return (
    <div>
    <nav>
      <div className="nav-1">
        <h2>Logo</h2>
        {/* <div className="Searchbar">
          <input placeholder="Search.."></input>
        </div> */}
        <input className="Search-bar" placeholder="Search"></input>
      </div>
      <div className="nav-2">
        <ul>
          <li><img className="search-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAY1BMVEX///8AAAD8/PyAgIDy8vJ0dHRsbGz4+Phvb2+IiIje3t7IyMjCwsKzs7PS0tJmZmbr6+vl5eXY2Ng7OztVVVWWlpYuLi5HR0dbW1ufn59AQEANDQ2rq6s0NDQZGRkpKSkhISG1PQwXAAAEQklEQVRoge1a2ZaCMAxl39cCgiLg/3/lSAMIjI6kjcPMOdxHbZs0vdlaFOXAgQP/BZrhRX4QBD5Lbe2XZbOrnqsztFURpr8kO71W6lPUZmB8WrgR5O1z6RydGX3yKIwi+0E4IA/sD0m3i7XBT3kVV+Vt9XMWfkT8dS7DOQfJ4y/NC4s5H5uIXDorp9Uv7tNDNgLnYQk9eTJCAufJ5nH0muRJOGnZ+ITSjcnjdO/N0GjS4Ewm3htdLt5iVX/0kZjIEYLx3LeyamRqQ0KCcTV3+3bSwRlagpgcDrwLMJO0IVTcpBUYjH/CLjTMu0keQQTLVPio7tWguBQJB+ZbIknFO/G5uYR4G5y5EpvNQAFXXL4JfieaUhkcnnAkBA514kWFD14oyEED1GfC4hUF3NARm6zzyVcJ8YqSi58Ak6bvHSlPyZnIVMh5siE8FDWiT5REYRv4efzkSvkUysQMAIGXopKMhWIIDz0XigqCibiARuB7I3gQt3BzgLY0vUwgUIpY/RydRLxiN2gqGXKJYwUdnUQDQad9Du5LHSaScY1NKvlGg7SmxoMWquL8EQ4ylCZ95VLLJN4lePcWbx/PQ0ZG18fz9ert4wOCzDsHuNP2/ZwJvb8HRIB3resDOk3qnQB83u4AxPQfstn2CHihjH49kAbl8invcNxD/n+SX36Ef9urqZiq9hzh4Bbk5iroxGsl7kCvpOn/Hn95F7a9AuQFS0knP0GWU/zu5kR3hcvzabN9vEHsgC42n8Z03UePCutPvAC4UIlPVWw553HCUL0m8WYqwzRT9okyAlX4cspFtyyvkbZ4NkP7T+OBQCbkYXZ0JagqEs250jXFmyq08tiVDH59LXF3O4FTGXn9oAwpm8AA8HyCj6XJjcQFklq0l4K7W9kYYApu/86AE7JrewYgn1gpAXPxzJkBrC/6CgVXpzJ9YCZ1hlC2SFDAlLQgnEAtWokPj4ASadSFFcRuYoY3c6k+ohJXYNi9ZBU1PGbjLwPg9Ua6jDc6VSR/JbGq0iiQNLCMhQlE7KI+oMtdY48KdNuJdFYXkCwjtPHrC2tbPeQ36gqCD4AT3HGh4r0GLF5LlwpBgHD8sqYrfozlGrNGkUsjSHJA8R6fFzn+q7Xs62OUbjuUHFh8/lSb4fdzYPPP4rI+4ZsLBaTbecNdrFcVoR8xz/NYFITu3N/U25Cx9MUEWQ7cG4nlgr0l2ratV7815zHhaMvxBBcantutVVghC+fpbnkEsiTsYQfWC8k93HWhtxxMdKXuu/l30W1cPMuS1BwAaAa7uk5cXrIsK3PLLML0RXpYcUA2Ei5hGz3eJCZ6DiDxEQ5gQO6GcgpQkXA7ViTcnwO/rwBxMsLjj3FgBwvsHoiIKyI8/hgHaJPRJuweiHbnwBGIdg9Ezs7y5wrs4IPKjAM7OECPkQMU9/tiMHfcPYez19mPMPdg/oEDB/4kvgAeFChwqV08pQAAAABJRU5ErkJggg=="/></li>
          <li><img className="Like-icon" src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"/></li>
          <li><img className="bell-icon" src="https://cdn-icons-png.flaticon.com/128/3119/3119338.png"/></li>
          <li><img className="message-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACOCAMAAADQI8A6AAAAYFBMVEX///8AAAC3t7erq6vs7Oxzc3P4+Pj7+/v09PSKiopBQUHg4OAWFhaAgICPj4+/v7/MzMzm5uYzMzPX19coKCgbGxujo6NRUVFbW1tqampGRkY6OjohISEICAiamppWVlZY9us/AAADc0lEQVR4nO2b25aCIBRAwfsltbSblfb/fznUKkcPoIhAL2e/zTJhK3CAI0MIgiAIgiAIgiAIgvySYF951qn2gZLL+fboqAO6R9YvGp0fLlS+nPpZmcPNpcyLey63yTPXNpTWjcwmcdpQA5IOFLc/saHXRKjj/caGUl+oc/yVzi4S2FT/10+Fb51i1FE9gU46XD3L+rpZ/KHCgr8YPWcu2qH81pjxnTkZZoaj6N1ZwKuH18OP9WDUt27S0GSO5jKqcF6H0jK2bNNPqlvSobSyKVOBypZ1aHuwJROEsC4FHTbgReFpM7HP16SkQ+978zaNaNWgpkNpKJ7etEkKYTWqOmx+M9hisS9Z9qrr0OfMem0d+VVWx4xOWNXgx4WRFktSUOyxGkbYnA4J4I13A0Gogl24CIiaDojgL9qNLXaAoeb2GrSqOqzTgXXzrtzQpaP+NC3t5L8nIWUd9jxw5XzRDkJ72bteocNKgZuuUGvaELfTeh2S9KCgWrzInsWD47T8r3udDosUW1usgaGmHS+l1uqwh7uD8lKlxMOnzBJE4Xq60FyvwwehWjkIVfBRClCtho7ghV+V1q5cQ/O3aemQ+AwK3ilsffwduKnnA5eeDrsI1wX1Qpfew3YKRV1OV4eVD6ccYfkye8mkp68z2qR96KRByIPtlEommC065AC7dCbs0jkM5lfp9LtJhz02XMyl/G9gqKGefMu2UWecV/hWNr1egambFnP7x806JIdD5joqKoDNKU/8GdIRBZTPC+DCU7cUnkzo8JvI7B2EGtiF28XZzYgOC0IwxRomEQw1D4WpzZAOiXvQYjvwdyeYEuzpCObVCRe1BJE5HTam4TJvQDl9ZlKHXwl9gKsaRzqsSz95mTXLV8M6LAiB3PjRX5PFM65D8kkQWrlZNa8z3tTd1m7lbeiw7dg76HTl6kSHFR3WYunlkmokFSzpEBJpJRSs6eiBOqiDOqiDOqiDOqiDOqiDOvo6rTudVkGnXvGFaBtBJteJhr3t/DlQgwypTcFhq1HK2NVhq6FCUXcdHfG59/YP6vWjby6i549hwtwZwmOMRHDMxw3iTz/JbDLUHk9JIkZ6ZsYu0sMCzQ9OwT5mUpu5NFdsi+NsQjzivo7ZRfZZcuCQ1o5G/KlOlc6Y5A7+a8PzKmNnyhAEQRAEQRAEQRBEiz8z2C3J42IShgAAAABJRU5ErkJggg=="/></li>
          <li><img  className="cart-icon"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOV4VaRCekJshpiqupuO5PJFvPODOAlZ778Tzo_gnQA&s"/></li>
          <li><img className="profile" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"/></li>
        </ul>
      </div>
    </nav>
    <div className="second-nav">
        <div className="text-container">
            <p>Feed</p>
            <p>Friends</p>
            <p>Groups</p>
            <p>Store</p>
        </div>
    </div>
    {/* <div className="main-content">
        <div className="main-1">
            <img className="main-img" src="https://friendkit.cssninja.io/assets/img/demo/bg/4.png"/>
            <div className="button-main">
                <div className="button-1">
                    <button>Timeline</button>
                    <button>About</button>
                </div>
                <img className="profile-main" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
                <div className="button-2">
                   <button >Friends</button>
                   <button >photos</button>
                </div>
                <div className="name-content">
                   <p>3.4K</p>
                   <p>Friends</p>
                   <button ><img className="history-icon" src="https://img.icons8.com/ios/1x/time-machine--v2.gif"/>History</button>
                </div>
                
            </div>
        </div>
    </div> */}
    </div>
  );
}
