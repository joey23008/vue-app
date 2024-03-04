<?php

namespace App\Http\Controllers\Api;

use App\Models\Room;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Resources\v1\RoomResource;

class RoomController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Room::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $room = Room::create($request->all());

        return response()->json([
            'status' => true,
            'message' => "Room Created successfully!",
            'room' => $room
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return response()->json(
            Room::find($id)
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
