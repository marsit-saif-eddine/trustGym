"use client";

import React from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const createGradient = (ctx:any, area:any) => {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  gradient.addColorStop(0, 'rgba(33, 150, 243, 1)'); 
  gradient.addColorStop(1, 'rgba(33, 150, 243, 0.2)'); 
  return gradient;
};

const VueGlobalePage: React.FC = () => {
  const userAcquisitionData = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [
      {
        label: 'User Acquisition',
        data: [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650],
        backgroundColor: (context:any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
          }
          return createGradient(ctx, chartArea);
        },
        borderColor: 'rgba(33, 150, 243, 1)',
        borderWidth: 1,
        borderRadius: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    ],
  };

  const userActivityData = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [
      {
        label: 'User Activity',
        data: [100, 200, 150, 300, 250, 400, 350, 500, 450, 600, 550, 700],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const subscriptionData = {
    labels: ['Paid', 'Trial'],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ['#1E40AF', '#93C5FD'], 
        hoverBackgroundColor: ['#1E40AF', '#93C5FD'],
        borderWidth: 0,
      },
    ],
  };

  const userData = {
    labels: ['New', 'Returning', 'Inactive'],
    datasets: [
      {
        data: [62, 13, 23],
        backgroundColor: ['#1E40AF', '#FCD34D', '#EF4444'], 
        hoverBackgroundColor: ['#1E40AF', '#FCD34D', '#EF4444'],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '80%', 
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="p-6">
      <header className="mb-6">
        <h1 className="text-2xl font-medium text-foreground">Vue globale</h1>
        <p className="text-sm text-muted-foreground">Bienvenue dans votre tableau de bord et plus de texte ici !</p>
      </header>
      <h1 className="text-xl font-medium text-foreground mb-4">Gestion des membres</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-primary">Nbr d&apos;abonnés actif</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">42</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-destructive">Nbr d&apos;abonnés bloqué</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">4</p>
          </CardContent>
        </Card>

      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Overall User Acquisition</CardTitle>
            <span className="text-sm text-muted-foreground float-right">Admin</span>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <Bar data={userAcquisitionData} options={chartOptions} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Subscriptions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-64">
              <Doughnut data={subscriptionData} options={chartOptions} />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-2xl font-bold">1,302</p>
              </div>
              <div className="absolute bottom-0 left-0 ml-4 mb-4 text-sm">
                <p className="text-blue-800">40% Paid</p>
                <p className="text-blue-400">60% Trial</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Overall User Activity</CardTitle>
            <span className="text-sm text-muted-foreground float-right">Admin</span>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <Line data={userActivityData} options={chartOptions} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-64">
              <Doughnut data={userData} options={chartOptions} />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-2xl font-bold">4,209</p>
              </div>
              <div className="absolute bottom-0 left-0 ml-4 mb-4 text-sm">
                <p className="text-blue-800">62% New</p>
                <p className="text-yellow-400">13% Returning</p>
                <p className="text-red-500">23% Inactive</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <h1 className="text-xl font-medium text-foreground mb-4">Gestion des membres</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

      <Card>
          <CardHeader>
            <CardTitle className="text-primary">Abonnements en cours</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">36</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-destructive">Abonnement expirés</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">4</p>
          </CardContent>
        </Card>
        </div>

    </div>
  );
};

export default VueGlobalePage;
