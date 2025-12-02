'use client'

import { useTrainers } from '@/lib/hooks/useTrainers'
import { useClasses } from '@/lib/hooks/useClasses'

export default function ClassesListExample() {
    const { trainers, loading: trainersLoading, error: trainersError } = useTrainers()
    const { classes, loading: classesLoading, error: classesError } = useClasses()

    if (trainersLoading || classesLoading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
            </div>
        )
    }

    if (trainersError || classesError) {
        return (
            <div className="text-red-500 p-4">
                Error loading data: {trainersError?.message || classesError?.message}
            </div>
        )
    }

    return (
        <div className="space-y-12 p-8">
            {/* Trainers Section */}
            <section>
                <h2 className="text-3xl font-bold mb-6">Our Trainers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trainers.map((trainer) => (
                        <div
                            key={trainer.id}
                            className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-purple-500 transition-all"
                        >
                            {trainer.image_url && (
                                <img
                                    src={trainer.image_url}
                                    alt={trainer.name}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                            )}
                            <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
                            <p className="text-purple-400 text-sm mb-2">{trainer.specialty}</p>
                            <p className="text-zinc-400 text-sm">{trainer.bio}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Classes Section */}
            <section>
                <h2 className="text-3xl font-bold mb-6">Upcoming Classes</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {classes.map((classItem) => (
                        <div
                            key={classItem.id}
                            className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-lg p-6 border border-zinc-700 hover:border-purple-500 transition-all"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">{classItem.name}</h3>
                                    <p className="text-sm text-zinc-400">{classItem.description}</p>
                                </div>
                                <span className="text-purple-400 font-semibold text-sm">
                                    {classItem.capacity} spots
                                </span>
                            </div>

                            {classItem.trainers && (
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-sm text-zinc-500">Trainer:</span>
                                    <span className="text-sm font-medium">{classItem.trainers.name}</span>
                                </div>
                            )}

                            <div className="flex justify-between items-center">
                                <div className="text-sm text-zinc-400">
                                    <div>{new Date(classItem.start_time).toLocaleDateString()}</div>
                                    <div>{new Date(classItem.start_time).toLocaleTimeString()}</div>
                                    <div>{classItem.duration_min} minutes</div>
                                </div>

                                <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-sm font-semibold transition-colors">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
