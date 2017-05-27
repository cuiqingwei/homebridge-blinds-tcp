# homebridge-blinds-tcp
Control your Blinds through TCP packets

* by cuiqingwei

# config.json

```
{
        "accessory": "BlindsTCP",
        "name": "Blinds",
        "host": "192.168.1.240",
        "port": 33000,
        "up_payload": "230C001A0040FFFFFFFFFFFF11030024",
        "down_payload": "230C001A0040FFFFFFFFFFFF10030024",
        "stop_payload": "230C001A0040FFFFFFFFFFFF12030024",
        "motion_time": "55000"
}
```

## Configuration Params

|             Parameter            |                       Description                       | Required |
| -------------------------------- | ------------------------------------------------------- |:--------:|
| `name`                           | name of the accessory                                   |     ✓    |
| `host`                           | endpoint for whatever is receiving these requests       |     ✓    |
| `port`                           | port of destination                                     |     ✓    |
| `up_payload`                     | payload for the up state (open)                         |     ✓    |
| `down_payload`                   | payload for the down state  (close)                     |     ✓    |
| `stop_payload`                   | payload for the stop state                              |     ✓    |
| `motion_time`                    | time which your blind needs to move from up to down (ms)|     ✓    |

## Help

  - Make sure to specify a port and host in the config file.

## Installation

1. Install homebridge using: `npm install -g homebridge`
2. Install this plugin using: `npm install -g homebridge-blinds-tcp`
3. Update your config file
