import time
from urllib.request import urlopen

api_key = 'fxazxgksqfe5u388zyt678wm'
endpoint = 'http://api.sportradar.us/ncaamb/trial/v7/en/rpi/{year}/rankings.json?api_key={key}'


def get_file_path(file_name):
    import os
    import sys
    dir_path = os.path.dirname(sys.argv[0])
    return os.path.join(dir_path, file_name)

for year in [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012]:
    url = endpoint.format(year=year, key=api_key)
    print('retrieving:', url, '...')
    response = urlopen(url)
    file_data = response.read().decode('utf-8', 'ignore')
    file_path = get_file_path('data_{year}.json'.format(year=year))
    f = open(file_path, 'w')
    f.write(file_data)
    f.close()
    # sleep for 2 seconds so as not to violate the TOS:
    time.sleep(2)

'''
curl http://api.sportradar.us/ncaamb/trial/v7/en/rpi/2019/rankings.json?api_key=fxazxgksqfe5u388zyt678wm > data2019.json
curl http://api.sportradar.us/ncaamb/trial/v7/en/rpi/2018/rankings.json?api_key=fxazxgksqfe5u388zyt678wm > data2018.json
curl http://api.sportradar.us/ncaamb/trial/v7/en/rpi/2017/rankings.json?api_key=fxazxgksqfe5u388zyt678wm > data2017.json
curl http://api.sportradar.us/ncaamb/trial/v7/en/rpi/2016/rankings.json?api_key=fxazxgksqfe5u388zyt678wm > data2016.json
curl http://api.sportradar.us/ncaamb/trial/v7/en/rpi/2015/rankings.json?api_key=fxazxgksqfe5u388zyt678wm > data2015.json
curl http://api.sportradar.us/ncaamb/trial/v7/en/rpi/2014/rankings.json?api_key=fxazxgksqfe5u388zyt678wm > data2014.json
curl http://api.sportradar.us/ncaamb/trial/v7/en/rpi/2013/rankings.json?api_key=fxazxgksqfe5u388zyt678wm > data2013.json
'''