<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use \App\Models\Room;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Room::trancate();
        
        $path = base_path() . '/tmp/csv/';
        $fileName = 'rooms.csv';
        $path_file = $path . $fileName;

        $i = 0;
        $f = fopen($path_file, "r");
        while($data = fgetcsv($f)) {
            if ($i !== 0) {
                DB::table('rooms')->insert([
                    'room_name' => $data[0],
                    'room_capacity' => $data[1],
                    'room_status' => $data[2],
                ]);
            }
            $i++;
        }
        fclose($f);
    }
}
